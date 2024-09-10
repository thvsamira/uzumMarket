import { makeModal } from "../../components/modal";
import { makeFooter, makeHeader } from "../../components/required";
import { getData } from "../../libs/http";
import {  catalog, showUser } from "../../scripts/script";
makeHeader()
makeFooter()
catalog()
makeModal()

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
const backet = document.querySelector('.backet');

let backetArr = JSON.parse(localStorage.getItem('backet')) || [];
let quantity = document.querySelector('.quantity')
quantity.textContent = backetArr.length

function updateBacketDisplay() {
    if (favorites.length === 0) {
        backet.classList.add('show');
        backet.classList.remove('hide');
    } else {
        backet.classList.remove('show');
        backet.classList.add('hide');
        createFav(favorites);
    }
}
 function createFav() {
    const favSlots = document.getElementById('fav-slots');
    favSlots.innerHTML = ''; 

    favorites.forEach(item => {
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
        
        if (favorites.some(fav => fav.id === item.id)) {
            likeIconDiv.classList.add('fill');
        }
        
        likeIconDiv.addEventListener('click', function(event) {
            this.classList.toggle('fill');
           event.stopPropagation()
            if (this.classList.contains('fill')) {
                if (!favorites.some(fav => fav.id === item.id)) {
                    favorites.push(item);
                }
                localStorage.setItem('favorites', JSON.stringify(favorites));
            } else {
                favorites = favorites.filter(fav => fav.id !== item.id);
                localStorage.setItem('favorites', JSON.stringify(favorites));
        
                const itemToRemove = this.closest('.item'); 
                if (itemToRemove) {
                    itemToRemove.remove();
                }
        
                updateBacketDisplay()
            }
        });
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'info';
        
        const titleH2 = document.createElement('h2');
        titleH2.className = 'title';
        titleH2.textContent = item.title.length > 70 ? item.title.slice(0, 70) + "..." : item.title;
        
        const ratingDiv = document.createElement('div');
        ratingDiv.className = 'rating';
        const starImg = document.createElement('img');
        starImg.src = '/star-512.webp';
        const ratingP = document.createElement('p');
        ratingP.textContent = item.rating;
        ratingDiv.appendChild(starImg);
        ratingDiv.appendChild(ratingP);
        
        const costBoxDiv = document.createElement('div');
        costBoxDiv.className = 'cost-box';
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
        
        // Create add to cart button
        const addCartButton = document.createElement('button');
        addCartButton.className = 'add-cart';
        const cartImg = document.createElement('img');
        cartImg.src = '/shopping-cart 1.png';
        cartImg.alt = '';
        
        let baсket = JSON.parse(localStorage.getItem('baсket')) || [];
        cartImg.onclick = (event) => {
            event.stopPropagation()
            baсket.push(item);
            localStorage.setItem('baсket', JSON.stringify(baсket));
        };
        addCartButton.appendChild(cartImg);
        
        infoDiv.appendChild(titleH2);
        infoDiv.appendChild(ratingDiv);
        infoDiv.appendChild(costBoxDiv);
        infoDiv.appendChild(addCartButton);
        
        itemDiv.appendChild(imgBoxDiv);
        itemDiv.appendChild(likeIconDiv);
        itemDiv.appendChild(infoDiv);
        favSlots.append(itemDiv);

        itemDiv.onclick = () => {
            localStorage.setItem('slotId', item.id);
            location.href = '/pages/cart/';
        };
    });

}

updateBacketDisplay()

let token = localStorage.getItem("token")
getData(`users?token=${token}`)
.then(res => {
  showUser(res.data[0])

})
.catch(error => console.log(error))