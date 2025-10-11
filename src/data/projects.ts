// data/projects.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Weather App",
    description: "A real-time weather app using OpenWeather API and React.",
    image: "/weather.png",
    tech: ["React", "Tailwind", "API"],
    link: "https://yourweatherapp.vercel.app",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "Full-stack e-commerce store with cart, login & checkout.",
    image: "/project02.png",
    tech: ["Next.js", "MongoDB", "Stripe"],
    link: "https://yourecommerce.vercel.app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Framer Motion.",
    image: "/project03.png",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    link: "https://yourportfolio.vercel.app",
  },
];
