const btn =  document.getElementById('btn');
const main = document.getElementById('main');
btn.addEventListener('click' , () =>{
     btn.classList.toggle('active');
 })

$('.owl-carousel').owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
    zindex:99999,
});

