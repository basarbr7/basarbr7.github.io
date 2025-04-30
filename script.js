  document.getElementById('menu-toggle').addEventListener('click', () => {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    });


  const navbar = document.querySelector("#nav")
  window.addEventListener("scroll", (e)=>{
    let scrolly = window.scrollY
    if(scrolly>100){
      navbar.classList.add("fixed", "top-0", "header-animation")
      navbar.classList.remove("absolute");
    }else{
      navbar.classList.remove("fixed", "top-0", "header-animation")
      navbar.classList.add("absolute");
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


  

  