const bannerTitleAnimate = document.querySelectorAll('.animate-letter');
let titleArray = [...bannerTitleAnimate];



titleArray.forEach(leter => {
  let letterArr = leter.innerHTML.split('');
  let titleTarget = leter;
  leter.innerHTML = '';

  letterArr.forEach(char => {
    const span = document.createElement('span');
    span.classList.add('elem-title');
    titleTarget.appendChild(span);

    if (char == " ") {
      char = '_';
      span.textContent = char;
      span.classList.add('transparent');
    }

    span.textContent = char;
  });
})

let timer = setInterval(setChar, 100);
let char = 0;

function setChar() {
  const arrSpan = document.querySelectorAll('.elem-title');
  const spanChar = document.querySelectorAll('.elem-title')[char];
  spanChar.classList.add('fade');
  char++;
  char === arrSpan.length && clearInterval(timer);
}


