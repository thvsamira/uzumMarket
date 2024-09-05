import { makeFooter, makeHeader } from "../../components/required";
import { getData } from "../../libs/http";
import { catalog, openModal, showUser } from "../../scripts/script";
makeFooter()
makeHeader()
openModal()
catalog()
let backetArr = JSON.parse(localStorage.getItem('backet')) || [];
let backet = document.querySelector('.backet');
let summary = document.querySelector('.cart-sum');

function updateBacketDisplay() {
    if (backetArr.length === 0) {
        backet.classList.add('show');
        backet.classList.remove('hide');
        summary.classList.add('hide');
        summary.classList.remove('show');
    } else {
        backet.classList.remove('show');
        backet.classList.add('hide');
        summary.classList.add('show');
        summary.classList.remove('hide');
        itemsInBacket();
    }
}

function itemsInBacket() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = ''; 

    backetArr.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const productImage = document.createElement('img');
        productImage.src = item.media[0];
        productImage.alt = 'Product Image';
        productImage.classList.add('product-image');

        const itemDetails = document.createElement('div');
        itemDetails.classList.add('item-details');

        const itemTitle = document.createElement('p');
        itemTitle.classList.add('item-title');
        itemTitle.textContent = item.title;

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = `${item.price * (item.count || 1)} сум`;

        const quantityControls = document.createElement('div');
        quantityControls.classList.add('quantity-controls');

        const decreaseBtn = document.createElement('button');
        decreaseBtn.classList.add('quantity-btn');
        decreaseBtn.textContent = '-';

        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = item.count || 1;
        quantityInput.min = '1';
        quantityInput.classList.add('quantity-input');

        const increaseBtn = document.createElement('button');
        increaseBtn.classList.add('quantity-btn');
        increaseBtn.textContent = '+';

        quantityControls.appendChild(decreaseBtn);
        quantityControls.appendChild(quantityInput);
        quantityControls.appendChild(increaseBtn);

        // Increase quantity handler
        increaseBtn.onclick = () => {
            item.count = (item.count || 1) + 1;
            quantityInput.value = item.count;
            itemPrice.textContent = `${item.price * item.count} сум`;
            localStorage.setItem('backet', JSON.stringify(backetArr));
            calculateTotal();
            updateCartQuantity();
        };

        // Decrease quantity handler
        decreaseBtn.onclick = () => {
            if (item.count > 1) {
                item.count -= 1;
                quantityInput.value = item.count;
                itemPrice.textContent = `${item.price * item.count} сум`;
            } else {
                alert('Товар был удален');
                backetArr.splice(backetArr.indexOf(item), 1);
                updateBacketDisplay();
            }
            localStorage.setItem('backet', JSON.stringify(backetArr));
            calculateTotal();
            itemsInBacket();
        };

        // Delete button handler
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Удалить';
        deleteBtn.onclick = () => {
            backetArr.splice(backetArr.indexOf(item), 1);
            localStorage.setItem('backet', JSON.stringify(backetArr));
            itemsInBacket();
            calculateTotal();
            updateBacketDisplay();
        };

        itemDetails.appendChild(itemTitle);
        itemDetails.appendChild(itemPrice);
        itemDetails.appendChild(quantityControls);
        itemDetails.appendChild(deleteBtn);

        cartItem.appendChild(productImage);
        cartItem.appendChild(itemDetails);
        cartItemsContainer.appendChild(cartItem);
    });

    calculateTotal();
    updateCartQuantity();
}

export function calculateTotal() {
    const totalPriceElement = document.querySelector('.summary-total');
    const totalPrice = backetArr.reduce((acc, item) => acc + (item.price * (item.count || 1)), 0);
    totalPriceElement.textContent = `Общая сумма: ${totalPrice} сум`;

    const totalItems = backetArr.reduce((acc, item) => acc + (item.count || 1), 0);
    const totalItemsElement = document.querySelector('.summary-details');
    totalItemsElement.textContent = `Итого товаров: ${totalItems}`;
}

 export function updateCartQuantity() {
    
    const quantityElement = document.querySelector('.quantity');
    quantityElement.textContent = backetArr.length
}

updateBacketDisplay();

let token = localStorage.getItem("token")
getData(`users?token=${token}`)
.then(res => {
  showUser(res.data[0])
})
.catch(error => console.log(error))