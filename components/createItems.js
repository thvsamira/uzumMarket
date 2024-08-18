export function CreateItem(item) {
    const item = document.createElement('div');
    item.className = 'item';

    // блок с изображением
    const imgBox = document.createElement('div');
    imgBox.className = 'img-box';
    const img = document.createElement('img');
    img.src = item.media[0];
    imgBox.appendChild(img);
    item.appendChild(imgBox);

    //  "лайк"
    const likeButton = document.createElement('button');
    likeButton.className = 'like';
    const likeImg = document.createElement('img');
    likeImg.src = '/heart 1.png';
    likeImg.alt = '';
    likeButton.appendChild(likeImg);
    item.appendChild(likeButton);

    // блок информации
    const info = document.createElement('div');
    info.className = 'info';

    // Заголовок
    const title = document.createElement('h2');
    title.className = 'title';
    title.innerHTML = 
    item.title.length > 70 ? item.title.slice(0, 70) + "..." : item.title;
    info.appendChild(title);

    // Блок рейтинга
    const rating = document.createElement('div');
    rating.className = 'rating';
    const starImg = document.createElement('img');
    starImg.src = '/star-512.webp';
    starImg.alt = '';
    rating.appendChild(starImg);
    const ratingText = document.createElement('p');
    ratingText.textContent = item.rating;
    rating.appendChild(ratingText);
    info.appendChild(rating);

    // Блок стоимости
    const costBox = document.createElement('div');
    costBox.className = 'cost-box';
    const costText = document.createElement('p');
    costText.className = 'cost';
    costText.textContent = `${item.cost} сум`;
    costBox.appendChild(costText);
    info.appendChild(costBox);

    // Кнопка "добавить в корзину"
    const addCartButton = document.createElement('button');
    addCartButton.className = 'add-cart';
    const cartImg = document.createElement('img');
    cartImg.src = '/shopping-cart 1.png';
    cartImg.alt = '';
    addCartButton.appendChild(cartImg);
    info.appendChild(addCartButton);


    item.appendChild(info);

    return item;
}
