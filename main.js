const menubtn =document.querySelector(".menu-btn");
const navlinks =document.querySelector(".nav-links");

menubtn.addEventListener('click', ()=>{
    menubtn.classList.toggle('active');
    navlinks.classList.toggle('active');
});