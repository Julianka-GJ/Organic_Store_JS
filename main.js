
const scrollItems = document.querySelectorAll('.animate');

const scrollAnimation = () => {
  let windowCentr = (window.innerHeight) + window.scrollY;
  scrollItems.forEach(el => {
    let scrollOffset = el.offsetTop + el.offsetHeight;
   
    if(windowCentr >= scrollOffset) {
      el.classList.add('element-show');
    }
    else {
      el.classList.remove('element-show');
    }
  })
};

window.addEventListener('scroll', () => {
  scrollAnimation()
});



// let timerAnim = setInterval(animatItem, 500);
// let indexItem = 0;

//   function animatItem() {
//     let indexItem = 0;
//     const itemAnamation = document.querySelectorAll('.success-item');
//     const elemArray = document.querySelectorAll('.success-item')[indexItem];
//     elemArray.classList.add('show');
//     indexItem++;
//     indexItem === itemAnamation.length && clearInterval(timerAnim);
//   }
  


