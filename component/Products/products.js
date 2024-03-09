const sectionProducts = document.querySelector('.section__products-catalog');

class Products {

    render() {
        let itemCards = '';

        CATALOG.forEach(({ id, category, title, priceOld, priceNew, img, alt }) => {

            itemCards += `
                <div class="item-card">
                    <div class="item-category">
                        <p>${category}</p>
                    </div>
                    <div class="item-img">
                        <img src=${img} alt=${alt} />
                    </div>
                    <div class="item-heading">
                        <p class="item-title">${title}</p>
                        <button type="button">Add to </button>
                    </div>
                    <div class="item-price">
                        <div class="price">
                            <p class="price-old">${priceOld}</p>
                            <p class="price-new">${priceNew}</p>
                        </div>
                        <div class="rating rating__set">
                            <div class="rating__body">
                                <div class="rating__active"></div>
                                <div class="rating__items">
                                    <input type="radio" class="rating__item" value="1" name="rating">
                                    <input type="radio" class="rating__item" value="2" name="rating">
                                    <input type="radio" class="rating__item" value="3" name="rating">
                                    <input type="radio" class="rating__item" value="4" name="rating">
                                    <input type="radio" class="rating__item" value="5" name="rating">
                                </div>
                            </div>
                            <div class="rating__value">4</div>
                        </div>
                    </div>
                </div>
            `;

            let productsCatalog = `
                <div class="section__catalog-items">
                    ${itemCards}
                </div>
            `
            sectionProducts.innerHTML = productsCatalog;
        })
    }
}


let productCart = new Products();
productCart.render();


