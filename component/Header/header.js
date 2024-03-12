const navMenu = document.querySelector('.header__nav-menu');
const navMenuMob = document.querySelector('.burger__icon');
const burgerMenu = document.querySelector('.burger__icon-btn');
const header = document.querySelector('.header');
const bannerTitle = document.querySelector('.banner__content-title');


class menuRenderer {
  static renderDeepList(target, source) {
    if (!target || source.length === 0) {
      return;
    }

    const listElem = document.createElement('ul');
    listElem.classList.add('menu-list');


    source.forEach((elem) => {
      if (elem.type === 'listMenu') {
        let li = document.createElement('li');
        this.createLiElem(li, elem.text, 'menu-link');

        listElem.appendChild(li);


        if (elem.type === 'listMenu' && elem.inside) {
          const subList = document.createElement('ul');
          subList.classList.add('sub-menu');

          const spanArrow = document.createElement('span');
          spanArrow.classList.add('menu-arrow');
          li.appendChild(spanArrow);

          elem.items.forEach((innerElem) => {
            if (innerElem.type === 'listSub') {
              const liSub = document.createElement('li')
              this.createLiElem(liSub, innerElem.text, 'sub-link');

              subList.appendChild(liSub);
            }

            li.appendChild(subList);
          });

          listElem.appendChild(li);
        }
      }
    })

    target.appendChild(listElem);
  }

  static createLiElem(target, content, clasElem) {
    const linkItem = document.createElement('a');
    linkItem.setAttribute('href', '#');
    linkItem.innerHTML = content;

    target.classList.add(clasElem);
    target.appendChild(linkItem);
  }
}

menuRenderer.renderDeepList(navMenu, dataMenu);


const menuLink = document.querySelectorAll('.menu-link');

function getBurgerMenu() {
  burgerMenu.addEventListener('click', function () {
    header.classList.toggle('open');
    getClassActive('click');
  })
}

function getClassActive(event) {
  let linkArr = [...menuLink];

  if (linkArr.length > 0) {
    linkArr.forEach(link => {
      link.addEventListener(event, function () {
        link.classList.toggle('active');
      })
    })
  }
}

getBurgerMenu();

function arrowLinkMenu() {
  getClassActive('mouseover');
  getClassActive('mouseout');
}

arrowLinkMenu();




