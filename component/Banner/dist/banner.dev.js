"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var bannerTitleAnimate = document.querySelectorAll('.animate-letter');

var titleArray = _toConsumableArray(bannerTitleAnimate);

titleArray.forEach(function (leter) {
  var letterArr = leter.innerHTML.split('');
  var titleTarget = leter;
  leter.innerHTML = '';
  letterArr.forEach(function (_char) {
    var span = document.createElement('span');
    span.classList.add('elem-title');
    titleTarget.appendChild(span);

    if (_char == " ") {
      _char = '_';
      span.textContent = _char;
      span.classList.add('transparent');
    }

    span.textContent = _char;
  });
});
var timer = setInterval(setChar, 100);
var _char2 = 0;

function setChar() {
  var arrSpan = document.querySelectorAll('.elem-title');

  var spanChar = document.querySelectorAll('.elem-title')[_char2];

  spanChar.classList.add('fade');
  _char2++;
  _char2 === arrSpan.length && clearInterval(timer);
}