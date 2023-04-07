const slides = document.querySelectorAll('.slide');
const nextBtn= document.querySelectorAll('.nextBTN');
const backBtn = document.querySelectorAll('.back-btn');
const activeShow =document.querySelector('.slider').children;
let x = 0;

nextBtn.forEach((btn)=>{
    btn.addEventListener('click' , function(){
        x++
        for(i=0;i<slides.length;i++){
            slides[i].classList.remove('active');
            activeShow[i].classList.remove('active');
        }
        slides[x].classList.add('active');
        activeShow[x].classList.add('active')
    })
})
backBtn.forEach((btn)=>{
    btn.addEventListener('click' , function(){
        x--
        for(i=0;i<slides.length;i++){
            slides[i].classList.remove('active');
            activeShow[i].classList.remove('active');

        }
        slides[x].classList.add('active')
        activeShow[x].classList.add('active')

    })
})