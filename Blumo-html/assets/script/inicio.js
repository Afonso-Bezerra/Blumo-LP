const btn =  document.getElementById('btn');
const main = document.getElementById('main');
btn.addEventListener('click' , () =>{
     btn.classList.toggle('active');
     main.classList.toggle('zindex');

})

$('.owl-carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    zindex:99999,
});

