"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var navMenu = document.querySelector('.header__nav-menu');
var navMenuMob = document.querySelector('.burger__icon');
var burgerMenu = document.querySelector('.burger__icon-btn');
var header = document.querySelector('.header');
var bannerTitle = document.querySelector('.banner__content-title');

var menuRenderer =
/*#__PURE__*/
function () {
  function menuRenderer() {
    _classCallCheck(this, menuRenderer);
  }

  _createClass(menuRenderer, null, [{
    key: "renderDeepList",
    value: function renderDeepList(target, source) {
      var _this = this;

      if (!target || source.length === 0) {
        return;
      }

      var listElem = document.createElement('ul');
      listElem.classList.add('menu-list');
      source.forEach(function (elem) {
        if (elem.type === 'listMenu') {
          var li = document.createElement('li');

          _this.createLiElem(li, elem.text, 'menu-link');

          listElem.appendChild(li);

          if (elem.type === 'listMenu' && elem.inside) {
            var subList = document.createElement('ul');
            subList.classList.add('sub-menu');
            var spanArrow = document.createElement('span');
            spanArrow.classList.add('menu-arrow');
            li.appendChild(spanArrow);
            elem.items.forEach(function (innerElem) {
              if (innerElem.type === 'listSub') {
                var liSub = document.createElement('li');

                _this.createLiElem(liSub, innerElem.text, 'sub-link');

                subList.appendChild(liSub);
              }

              li.appendChild(subList);
            });
            listElem.appendChild(li);
          }
        }
      });
      target.appendChild(listElem);
    }
  }, {
    key: "createLiElem",
    value: function createLiElem(target, content, clasElem) {
      var linkItem = document.createElement('a');
      linkItem.setAttribute('href', '#');
      linkItem.innerHTML = content;
      target.classList.add(clasElem);
      target.appendChild(linkItem);
    }
  }]);

  return menuRenderer;
}();

menuRenderer.renderDeepList(navMenu, dataMenu);
var menuLink = document.querySelectorAll('.menu-link');

function getBurgerMenu() {
  burgerMenu.addEventListener('click', function () {
    header.classList.toggle('open');
    getClassActive('click');
  });
}

function getClassActive(event) {
  var linkArr = _toConsumableArray(menuLink);

  if (linkArr.length > 0) {
    linkArr.forEach(function (link) {
      link.addEventListener(event, function () {
        link.classList.toggle('active');
      });
    });
  }
}

getBurgerMenu();

function arrowLinkMenu() {
  getClassActive('mouseover');
  getClassActive('mouseout');
}

arrowLinkMenu();