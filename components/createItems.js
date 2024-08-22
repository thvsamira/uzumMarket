export function CreateItem(item) {
const itemDiv = document.createElement('div');
itemDiv.className = 'item';

//  div для изображения
const imgBoxDiv = document.createElement('div');
imgBoxDiv.className = 'img-box';

//  img
const imgElement = document.createElement('img');
imgElement.src = item.media[0];

// Добавляем img в imgBoxDiv
imgBoxDiv.appendChild(imgElement);

// Создаем div для иконки лайка
const likeIconDiv = document.createElement('div');
likeIconDiv.className = 'like-icon';
// liked.id = 'like';

// Создаем SVG и добавляем его в likeIconDiv
const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgElement.setAttribute('viewBox', '0 0 24 24');
svgElement.setAttribute('fill', 'none');
svgElement.setAttribute('stroke', 'currentColor');
svgElement.setAttribute('stroke-width', '2');
svgElement.setAttribute('stroke-linecap', 'round');
svgElement.setAttribute('stroke-linejoin', 'round');

const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
pathElement.setAttribute('d', 'M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z');

likeIconDiv.addEventListener('click', function() {
    this.classList.toggle('fill');
    if (this.classList.contains('fill')) {
        localStorage.setItem('like', item.id); 
        window.location.href = '/pages/favourite/'; 
    } else {
        localStorage.removeItem('like');
    }
    
});
// Добавляем path в svg
svgElement.appendChild(pathElement);
likeIconDiv.appendChild(svgElement);

// Создаем div для информации
const infoDiv = document.createElement('div');
infoDiv.className = 'info';

// Создаем заголовок h2
const titleH2 = document.createElement('h2');
titleH2.className = 'title';
titleH2.textContent = 
item.title.length > 70 ? item.title.slice(0, 70) + "..." : item.title;

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

// Создаем div для стоимости
const costBoxDiv = document.createElement('div');
costBoxDiv.className = 'cost-box';

// Создаем элемент p для стоимости
const costP = document.createElement('p');
costP.className = 'cost';
costP.textContent = `${item.price} сум`;

// Добавляем p в costBoxDiv
costBoxDiv.appendChild(costP);

// Создаем кнопку для добавления в корзину
const addCartButton = document.createElement('button');
addCartButton.className = 'add-cart';

// Создаем элемент img для иконки корзины
const cartImg = document.createElement('img');
cartImg.src = '/shopping-cart 1.png';
cartImg.alt = '';

// Добавляем img в кнопку
addCartButton.appendChild(cartImg);

// Собираем все элементы вместе
infoDiv.appendChild(titleH2);
infoDiv.appendChild(ratingDiv);
infoDiv.appendChild(costBoxDiv);
infoDiv.appendChild(addCartButton);

itemDiv.appendChild(imgBoxDiv);
itemDiv.appendChild(likeIconDiv);
itemDiv.appendChild(infoDiv);



    return itemDiv;
}


export function CreateFavItems(item){
    
}