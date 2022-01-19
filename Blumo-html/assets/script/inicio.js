const btn =  document.getElementById('btn');
const main = document.getElementById('main');
btn.addEventListener('click' , () =>{
     btn.classList.toggle('active');
 })

const conteudo =  document.getElementById('conteudo');

 conteudo.addEventListener('click', () =>{
    if(document.getElementById('menucheck').checked == true){
        document.getElementById('menucheck').checked = false
        btn.classList.toggle('active');
    }
 })


 $(() => {
    $('#cassossel1').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        zindex:99999,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        smartSpeed:850,
        responsiveClass:true,
        responsive:{
            0:{
                stagePadding: 10,
            },
            321:{
                stagePadding: 50,
            }
        }
    });
    $('#cassossel2').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        zindex:999,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        smartSpeed:850,
        responsiveClass:true,
        responsive:{
            0:{
                stagePadding: 70,
            },
            321:{
                stagePadding: 80,
            }
        }
    });
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

new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    bgcolor: 'transparent', 
    maxWidth: '80%',
    spinner: 'swing',
});

// const linksFake = document.querySelectorAll('#caixa');
// const descCaixaContainer = document.getElementById('descContainer')
// linksFake.forEach((linkFake) => {
//   linkFake.addEventListener('click', (ev) => {
//     const currentElemet = ev.currentTarget.getAttribute("data-caixa");
//     const caixaSelector = currentElemet.split(' ')[1]
//     const currentDesc = document.getElementById(currentElemet)
//     descCaixaContainer.style.display = "flex";
//     descCaixaContainer.style.opacity= "1";
//     currentDesc.style.display = "flex";
//     document.body.style.overflow = 'hidden'
//     descCaixaContainer.addEventListener('click' , () => {
//           descCaixaContainer.style.opacity= "0";
//         setTimeout(() =>{
//             descCaixaContainer.style.display = "none";
//             currentDesc.style.display = "none";
//         },500)
//         document.body.style.overflow = 'auto'
//     })
//   })
// })
