const btn =  document.getElementById('btn');
const main = document.getElementById('main');
btn.addEventListener('click' , () =>{
     btn.classList.toggle('active');
 })

$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    zindex:99999,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    smartSpeed:850

});

$('.owl-carousel-depoimento').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    zindex:99999,
});



const button = document.getElementById('button-retangulo');


const buttonredondo = document.getElementById('whatsapp-fixed');


document.addEventListener('scroll' , () => {


   const posibutton =  button.getBoundingClientRect();

   if(posibutton.y <= 837 && posibutton.y > 70 ){
       buttonredondo.style.opacity='0'
       button.style.opacity = '1'
   }else{
       buttonredondo.style.opacity ="1"
       button.style.opacity = '0'
   }
})


AOS.init();

