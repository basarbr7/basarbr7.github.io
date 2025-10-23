
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Animate() {
  const [isHovered, setIsHovered] = useState(false);

   const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    // ---- sizes based on container ----
    const getSize = () => {
      return {
        width: container.clientWidth || 300,
        height: container.clientHeight || 300,
      };
    };

    const { width, height } = getSize();

    // ---- scene, camera, renderer ----
    const scene = new THREE.Scene();
    // optional: slightly dark background so the sphere pops
    scene.background = new THREE.Color(0x111111);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    // ---- lights ----
    const ambient = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambient);

    const keyLight = new THREE.PointLight(0xffffff, 1.2);
    keyLight.position.set(3, 3, 3);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x6688ff, 0.45);
    fillLight.position.set(-3, -2, 2);
    scene.add(fillLight);

    // ---- sphere (profile-globe) ----
    const geometry = new THREE.SphereGeometry(1.35, 64, 64);

    // subtle normal/rough-metal look
    const material = new THREE.MeshStandardMaterial({
      color: 0x9ca3af, // tailwind gray-400 like
      metalness: 0.5,
      roughness: 0.35,
      emissive: 0x000000,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // ---- optional: soft particle halo (simple points) ----
    const ptsCount = 160;
    const positions = new Float32Array(ptsCount * 3);
    for (let i = 0; i < ptsCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.6 + Math.random() * 0.6;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      positions[i * 3 + 0] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pointsMat = new THREE.PointsMaterial({ size: 0.03, sizeAttenuation: true, opacity: 0.9, transparent: true, color: 0xffffff });
    const points = new THREE.Points(pointsGeo, pointsMat);
    scene.add(points);

    // ---- interaction state ----
    const mouse = { x: 0, y: 0 };
    let targetRotX = 0;
    let targetRotY = 0;

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      // normalized -0.5..0.5
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      mouse.x = nx;
      mouse.y = ny;
      // map to small rotation targets
      targetRotY = nx * 1.2; // horizontal -> rotate around Y
      targetRotX = -ny * 0.6; // vertical -> rotate around X
      // move keyLight slightly to produce parallax highlight
      keyLight.position.x = 3 + nx * 2.2;
      keyLight.position.y = 3 - ny * 2.2;
    };

    container.addEventListener("pointermove", onPointerMove);

    // ---- animation loop ----
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();

      // gentle automatic rotation
      sphere.rotation.y += 0.004 + Math.sin(t * 0.6) * 0.0008;
      sphere.rotation.x += 0.0015;

      // interpolate toward mouse target for smoothness
      sphere.rotation.x += (targetRotX - sphere.rotation.x) * 0.08;
      sphere.rotation.y += (targetRotY - sphere.rotation.y) * 0.08;

      // pulsating scale (breathing)
      const pulse = 1 + Math.sin(t * 1.6) * 0.015;
      sphere.scale.set(pulse, pulse, pulse);

      // rotate particle halo slowly
      points.rotation.y = t * 0.12;
      points.rotation.x = Math.sin(t * 0.05) * 0.03;

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    // ---- responsive handler ----
    const handleResize = () => {
      if (!container) return;
      const s = getSize();
      camera.aspect = s.width / s.height;
      camera.updateProjectionMatrix();
      renderer.setSize(s.width, s.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

    // ---- cleanup ----
    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("pointermove", onPointerMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      // remove canvas
      if (container && renderer.domElement) container.removeChild(renderer.domElement);
      // dispose resources
      geometry.dispose();
      material.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      renderer.dispose();
    };
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-8">
      <div 
        className="relative w-80 h-96"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Image - behind main, slides left with angle */}
        <div 
          className="absolute w-full h-full transition-all duration-700 ease-out"
          style={{ 
            zIndex: 1,
            transformOrigin: 'bottom center',
            transform: isHovered 
              ? 'translateX(-100px) translateY(-30px) rotate(-15deg)' 
              : 'translateX(0) translateY(0) rotate(0)',
            opacity: isHovered ? 1 : 0
          }}
        >
            <img
            src="/mypic-full.jpg"
            alt="About Me"
            className="object-cover shadow-lg w-full h-full "
            />
        </div>

        {/* Right Image - behind main, slides right with angle */}
        <div 
          className="absolute w-full h-full transition-all duration-700 ease-out"
          style={{ 
            zIndex: 1,
            transformOrigin: 'bottom center',
            transform: isHovered 
              ? 'translateX(70px) translateY(-30px) rotate(15deg)' 
              : 'translateX(0) translateY(0) rotate(0)',
            opacity: isHovered ? 1 : 0
          }}
        >
            <img
                src="/mypic-full.jpg"
                alt="About Me"
                className="object-cover shadow-lg w-full h-full "
            />
        </div>

        {/* Main Image - always visible on top */}
        <div className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: 3 }}
        >
            <img
            src="/mypic-full.jpg"
            alt="About Me"
            className="object-cover shadow-lg w-full h-full "
            /> 
        </div>
      </div>

      <div className="absolute bottom-10 text-white text-center">
        <p className="text-lg opacity-75">Hover to reveal hidden cards</p>
      </div>
    </div>
  );
}