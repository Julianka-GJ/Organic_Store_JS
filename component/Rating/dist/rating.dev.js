"use strict";

var ratings = document.querySelectorAll('.rating');

if (ratings.length > 0) {
  initRatings();
}

function initRatings() {
  var ratingActive, ratingValue;

  for (var index = 0; index < ratings.length; index++) {
    var rating = ratings[index];
    initRatingStar(rating);
  }

  function initRatingStar(rating) {
    initRatingVar(rating);
    setActiveRating();

    if (rating.classList.contains('rating__set')) {
      setRating(rating);
    }
  }

  function initRatingVar(rating) {
    ratingActive = rating.querySelector('.rating__active');
    ratingValue = rating.querySelector('.rating__value');
  }

  function setActiveRating() {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ratingValue.innerHTML;
    var ratingActiveWidth = index / 0.05;
    ratingActive.style.width = "".concat(ratingActiveWidth, "%");
  }

  function setRating(rating) {
    var ratingsItems = rating.querySelectorAll('.rating__item');

    var _loop = function _loop(_index) {
      var ratingItem = ratingsItems[_index];
      ratingItem.addEventListener('mouseenter', function (e) {
        initRatingVar(rating);
        setActiveRating(ratingItem.value);
      });
      ratingItem.addEventListener('mouseleave', function (e) {
        setActiveRating();
        ratingValue.innerHTML = _index + 1;
        setActiveRating();
      });
    };

    for (var _index = 0; _index < ratingsItems.length; _index++) {
      _loop(_index);
    }
  }
}