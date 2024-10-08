export function CreateItem(item) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';

    const imgBoxDiv = document.createElement('div');
    imgBoxDiv.className = 'img-box';

    const imgElement = document.createElement('img');
    imgElement.src = item.media[0];

    imgBoxDiv.appendChild(imgElement);

    const likeIconDiv = document.createElement('div');
    likeIconDiv.className = 'like-icon';

    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('viewBox', '0 0 24 24');
    svgElement.setAttribute('fill', 'none');
    svgElement.setAttribute('stroke', 'currentColor');
    svgElement.setAttribute('stroke-width', '2');
    svgElement.setAttribute('stroke-linecap', 'round');
    svgElement.setAttribute('stroke-linejoin', 'round');

    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement.setAttribute('d', 'M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z');

    svgElement.appendChild(pathElement);
    likeIconDiv.appendChild(svgElement);

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.some(fav => fav.id === item.id)) {
        likeIconDiv.classList.add('fill');
    }

    likeIconDiv.addEventListener('click', function(event) {
        event.stopPropagation(); 
        this.classList.toggle('fill');

        favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (this.classList.contains('fill')) {
            if (!favorites.some(fav => fav.id === item.id)) {
                favorites.push(item);
            }
        } else {
            favorites = favorites.filter(fav => fav.id !== item.id);
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
    });

    const infoDiv = document.createElement('div');
    infoDiv.className = 'info';

    const titleH2 = document.createElement('h2');
    titleH2.className = 'title';
    titleH2.textContent =
        item.title.length > 70 ? item.title.slice(0, 70) + "..." : item.title;

    const ratingDiv = document.createElement('div');
    ratingDiv.className = 'rating';

    const starImg = document.createElement('img');
    starImg.src = '/star-512.webp';

    // Создаем элемент p для рейтинга
    const ratingP = document.createElement('p');
    ratingP.textContent = item.rating;

    // Добавляем img и p в ratingDiv
    ratingDiv.appendChild(starImg);
    ratingDiv.appendChild(ratingP);

    // Создаем div для стоимости
    const costBoxDiv = document.createElement('div');
    costBoxDiv.className = 'cost-box';

    // Создаем элемент p для стоимости
    const costP = document.createElement('p');
    const saleP = document.createElement('p');
    costP.className = 'cost';
    saleP.className = 'sale';
    costP.textContent = `${item.price} сум`;

    if (item.salePercentage) {
        costP.style.textDecoration = 'line-through';
        costP.style.color = 'gray';
        saleP.textContent = `${Math.floor(item.price - (item.price * item.salePercentage) / 100)} сум`;
    }

    costBoxDiv.append(costP, saleP);

    const addCartButton = document.createElement('button');
    addCartButton.className = 'add-cart';

    const cartImg = document.createElement('img');
    cartImg.src = '/shopping-cart 1.png';
    cartImg.alt = '';

    addCartButton.appendChild(cartImg);

    cartImg.onclick = (event) => {
        event.stopPropagation()
        let backet = JSON.parse(localStorage.getItem('backet')) || [];

        if (!backet.some(b => b.id === item.id)) {
            backet.push(item);
        }

        localStorage.setItem('backet', JSON.stringify(backet)); 

    };

    // Собираем все элементы вместе
    infoDiv.appendChild(titleH2);
    infoDiv.appendChild(ratingDiv);
    infoDiv.appendChild(costBoxDiv);
    infoDiv.appendChild(addCartButton);

    itemDiv.appendChild(imgBoxDiv);
    itemDiv.appendChild(likeIconDiv);
    itemDiv.appendChild(infoDiv);

    itemDiv.onclick = () => {
        localStorage.setItem('slotId', item.id);
        location.href = '/pages/cart/';
    };

    return itemDiv;
}



// Функция для создания и добавления элементов
export function CreateProductElement(item) {

    // Создаем элементы для деталей продукта
    const productDetails = document.createElement('div');
    productDetails.className = 'product-details';

    const productTitle = document.createElement('h1');
    productTitle.textContent = item.title

    // Создаем div для рейтинга
const ratingDiv = document.createElement('div');
ratingDiv.className = 'rating';

// Создаем элемент img для звезды
const starImg = document.createElement('img');
starImg.src = '/star-512.webp';

// Создаем элемент p для рейтинга
const ratingP = document.createElement('p');
ratingP.textContent = item.rating;

// Добавляем img и p в ratingDiv
ratingDiv.appendChild(starImg);
ratingDiv.appendChild(ratingP);

    const costBoxDiv = document.createElement('div');
    costBoxDiv.className = 'cost-box';
    const costP = document.createElement('p');
const saleP = document.createElement('p')
costP.className = 'cost';
saleP.className = 'sale'
costP.textContent = `${item.price} сум`;

if (item.salePercentage) {
    costP.style.textDecoration =   'line-through'
    costP.style.color = 'gray'
    saleP.textContent = `${
       Math.floor(item.price - (item.price * item.salePercentage) / 100)
    } сум`;

} else{
    saleP.inert = item.price
}

    costBoxDiv.appendChild(costP);
    costBoxDiv.appendChild(saleP);

    const productQuantity = document.createElement('div');
    productQuantity.className = 'product-quantity';

    const minusButton = document.createElement('button');
    minusButton.textContent = '-';

    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.value = '1';
    quantityInput.min = '1';

    const plusButton = document.createElement('button');
    plusButton.textContent = '+';

  minusButton.onclick = () => {
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
};

plusButton.onclick = () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
};    

    productQuantity.appendChild(minusButton);
    productQuantity.appendChild(quantityInput);
    productQuantity.appendChild(plusButton);

    const productDescription = document.createElement('p');
    productDescription.className = 'product-description';
    productDescription.textContent = item.description;

    const productButtons = document.createElement('div');
    productButtons.className = 'product-buttons';

    const addToCartButton = document.createElement('button');
    addToCartButton.className = 'add-to-cart';
    addToCartButton.textContent = 'Добавить в корзину';

    let backet = JSON.parse(localStorage.getItem('backet'));

    if (!Array.isArray(backet)) {
        backet = [];
    }
    
        addToCartButton.onclick = (event) => {
            event.stopPropagation(); 
            if (!backet.some(b => b.id === item.id)) {
                backet.push(item);
            }
            localStorage.setItem('backet', JSON.stringify(backet)); 
    
        };

    const addToFavoritesButton = document.createElement('button');
    addToFavoritesButton.className = 'add-to-favorites';
    addToFavoritesButton.textContent = 'Добавить в избранное';

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.some(fav => fav.id === item.id)) {
        addToFavoritesButton.classList.add('fill');
    }

    addToFavoritesButton.addEventListener('click', function(event) {
        event.stopPropagation(); 
        this.classList.toggle('fill');

        favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (this.classList.contains('fill')) {
            if (!favorites.some(fav => fav.id === item.id)) {
                favorites.push(item);
            }
        } else {
            favorites = favorites.filter(fav => fav.id !== item.id);
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
    });
    const infoBox = document.createElement('div');
    infoBox.className = 'info-box';
  
    //  секция - Быстрая доставка
    const deliverySection = document.createElement('div');
    deliverySection.className = 'info-item';
    
    const deliveryTitle = document.createElement('h3');
    deliveryTitle.textContent = 'Быстрая доставка от 1 дня';
    
    const deliveryText = document.createElement('p');
    deliveryText.textContent = 'В пункты выдачи Uzum или курьером';
    
    deliverySection.appendChild(deliveryTitle);
    deliverySection.appendChild(deliveryText);
    
    infoBox.appendChild(deliverySection);
    infoBox.appendChild(document.createElement('hr'));
  
    // секция - Безопасная оплата
    const paymentSection = document.createElement('div');
    paymentSection.className = 'info-item';
    
    const paymentTitle = document.createElement('h3');
    paymentTitle.textContent = 'Безопасная оплата удобным способом';
    
    const paymentText = document.createElement('p');
    paymentText.textContent = 'Оплачивайте картой, наличными или в рассрочку';
    
    const paymentIcons = document.createElement('div');
    paymentIcons.className = 'payment-icons';
      
      const img = document.createElement('img');
      img.src = '/cards.png'
     
    paymentSection.appendChild(paymentTitle);
    paymentSection.appendChild(paymentText);
    paymentIcons.appendChild(img)
    paymentSection.appendChild(paymentIcons);
    
    infoBox.appendChild(paymentSection);
    infoBox.appendChild(document.createElement('hr'));
  
    //  секция - Возврат
    const returnSection = document.createElement('div');
    returnSection.className = 'info-item';
    
    const returnTitle = document.createElement('h3');
    returnTitle.textContent = 'Простой и быстрый возврат';
    
    const returnText = document.createElement('p');
    returnText.textContent = 'Прием товаров в течение 10 дней и сразу вернём деньги';
    
    returnSection.appendChild(returnTitle);
    returnSection.appendChild(returnText);
  
    infoBox.appendChild(returnSection);

    productButtons.appendChild(addToCartButton);
    productButtons.appendChild(addToFavoritesButton);

    productDetails.appendChild(productTitle);
    productDetails.append(ratingDiv)
    productDetails.appendChild(costBoxDiv);
    productDetails.appendChild(productQuantity);
    productDetails.appendChild(productDescription);
    productDetails.appendChild(productButtons);
    productDetails.appendChild(infoBox)

    return productDetails
}



export function DisplayImg(item) {
    const fragment = document.createDocumentFragment(); 

    item.media.forEach((imageSrc) => {
  
        // Создаем контейнер для слайда
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');

        const swiperImg = document.createElement('div');
        swiperImg.classList.add('swiper-img');

        // Создаем элемент изображения
        const img = document.createElement('img');
        img.src = imageSrc; 
        img.alt = 'Product Image';

        // Встраиваем элементы друг в друга
        swiperImg.appendChild(img);
        swiperSlide.appendChild(swiperImg);

        // Добавляем слайд в фрагмент
        fragment.append(swiperSlide);
    });

    return fragment; 
}


