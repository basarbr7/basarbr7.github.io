  
  AOS.init({once: true});

  // mouse coursor animation events
  const cursor = document.querySelector(".cursor")
  let timeout;
  document.addEventListener("mousemove", (e)=>{
    let x = e.pageX
    let y = e.pageY
    cursor.style.top = y + "px"
    cursor.style.left = x + "px"
    cursor.style.display = "block"

    clearTimeout(timeout)
    timeout = setTimeout(()=>{
      cursor.style.display = "none"
    },1000)
  })

  document.addEventListener("mouseout", (e)=>{
    cursor.style.display = "none"
    clearTimeout(timeout)
  })




  const toggleBtn = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });


  const navbar = document.querySelector("#nav")
  window.addEventListener("scroll", (e)=>{
    let scrolly = window.scrollY
    if(scrolly>100){
      navbar.classList.add("fixed", "top-0", "header-animation", "bg-[#ffffff]", "shadow-lg")
      navbar.classList.remove("absolute");
      navbar.classList.remove("mt-5");
    }else{
      navbar.classList.remove("fixed", "top-0", "header-animation", "bg-[#ffffff]", "shadow-lg")
      navbar.classList.add("absolute");
      navbar.classList.add("mt-5");
    }
    
  })


  // Smooth scroll 
  const anchorsAll = document.querySelectorAll('a[href^="#"]')

  anchorsAll.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const navbarHeight = 60;
      const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    });
  });


  // progress bar animation
  let animated = false;

  document.addEventListener("scroll", function () {
    const section = document.querySelector("#about");
    const bars = document.querySelectorAll(".progress-bar");
  
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    console.log(windowHeight);
    
  
    if (!animated && sectionTop < windowHeight-100) {
      animated = true;
  
      bars.forEach(bar => {
        const animationClass = bar.dataset.animation;
        bar.classList.add(animationClass);
      });
    }
  });
  


  