import { makeFooter, makeHeader } from "../../components/required";
makeHeader()
makeFooter()

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
const favoriteIds = favorites.map(item => item.id);
const backet = document.querySelector('.backet')

if (favorites.length === 0) {
    backet.classList.add('show');
    backet.classList.remove('hide');
} else {
    backet.classList.remove('show');
    backet.classList.add('hide');
    createFav(favorites); 
}
function createFav(favorites) {

    const favSlots = document.getElementById('fav-slots')
    favorites.forEach(item => {
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
        
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (favorites.some(fav => fav.id === item.id)) {
            likeIconDiv.classList.add('fill');
        }

        likeIconDiv.addEventListener('click', function() {
            this.classList.toggle('fill');

            if (this.classList.contains('fill')) {
                if (!favorites.some(fav => fav.id === item.id)) {
                    favorites.push(item);
                }
                localStorage.setItem('favorites', JSON.stringify(favorites));
                localStorage.setItem('liked', item.id);
            } else {
                favorites = favorites.filter(fav => fav.id !== item.id);
                localStorage.setItem('favorites', JSON.stringify(favorites));
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
        
        } 
        
        // Добавляем p в costBoxDiv
        costBoxDiv.append(costP, saleP);
        
        // Создаем кнопку для добавления в корзину
        const addCartButton = document.createElement('button');
        addCartButton.className = 'add-cart';
        
        // Создаем элемент img для иконки корзины
        const cartImg = document.createElement('img');
        cartImg.src = '/shopping-cart 1.png';
        cartImg.alt = '';
        
        let basket = JSON.parse(localStorage.getItem('basket')) || [];
        
        // Предполагается, что cartImg — это элемент изображения на странице
        cartImg.onclick = () => {
            // Добавляем элемент в массив корзины
            basket.push(item);
        
            // Сохраняем обновлённый массив корзины в локальном хранилище
            localStorage.setItem('basket', JSON.stringify(basket));
        
            console.log('Товар добавлен в корзину:', item);
            console.log('Текущая корзина:', basket);
        };
        
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
        
        
        itemDiv.onclick = () => {
            localStorage.setItem('slotId', item.id);
            location.href = '/pages/cart/';
        };

        favSlots.append(itemDiv)
    });

 }


