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
