const ratings = document.querySelectorAll('.rating');

if (ratings.length > 0) {
    initRatings();
}

function initRatings() {
    let ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
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

    function setActiveRating(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function setRating(rating) {
        const ratingsItems = rating.querySelectorAll('.rating__item');

        for (let index = 0; index < ratingsItems.length; index++) {
            const ratingItem = ratingsItems[index];
            ratingItem.addEventListener('mouseenter', function (e) {
                initRatingVar(rating);
                setActiveRating(ratingItem.value);
            })

            ratingItem.addEventListener('click', function (e) {
                ratingValue.innerHTML = index + 1;
                setActiveRating()
            })
        }
    }
}