const scrollItems = document.querySelectorAll('.animate');
const goTop = document.querySelector('.go-top');

const scrollAnimation = () => {
  let windowCentr = (window.innerHeight) + window.scrollY;
  scrollItems.forEach(el => {
    let scrollOffset = el.offsetTop + el.offsetHeight;

    if (windowCentr >= scrollOffset) {
      el.classList.add('element-show');
    }
    else {
      el.classList.remove('element-show');
    }
  })
};

window.addEventListener('scroll', () => {
  scrollAnimation();
  goTop.classList.toggle('active', window.scrollY > 300);
});


// let timerAnim = setInterval(animatItem, 500);
// let indexItem = 0;

// function animatItem() {
//   const itemAnamation = document.querySelectorAll('.success-item');
//   const elemArray = document.querySelectorAll('.success-item')[indexItem];
//   elemArray.classList.add('element-show');
//   indexItem++;
//   indexItem === itemAnamation.length && clearInterval(timerAnim);
// }


function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

goTop.addEventListener('click', scrollTop);