  
  // AOS animation 
  AOS.init({once: true});


  // mouse coursor animation events
  const cursor = document.querySelector(".cursor")
  let timeout;
  document.addEventListener("mousemove", (e)=>{
    console.log(e);
    
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



// mobile toggle btn 
const toggleBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggleBtn.addEventListener("click", () => {
  // toggle class
  if (mobileMenu.classList.contains("max-h-0")) {
    mobileMenu.classList.remove("max-h-0");
    mobileMenu.classList.add("max-h-96");
  } else {
    
    mobileMenu.classList.remove("max-h-96");
    mobileMenu.classList.add("max-h-0");
  }
});


  // navbar scrollY toggle 
  const navbar = document.querySelector("#nav")
  window.addEventListener("scroll", (e)=>{
    let scrolly = window.scrollY
    if(scrolly>100){
     
      navbar.classList.add("fixed", "top-0", "header-animation", "sm:bg-[#ffffff]", "shadow-lg")
      navbar.classList.remove("absolute", "md:mt-5");
    }else{
      navbar.classList.remove("fixed", "top-0", "header-animation", "sm:bg-[#ffffff]", "shadow-lg")
      navbar.classList.add("absolute", "md:mt-5");
    }
  })


  // Smooth scroll page up down 
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
  


  