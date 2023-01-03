const toggle = document.querySelector('.toggle');
const navagation = document.querySelector(".navagation");


toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('active')
    navagation.classList.toggle("active");
})

