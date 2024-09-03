import { makeFooter, makeHeader } from "../../components/required";

makeFooter()
makeHeader()

let backet = JSON.parse(localStorage.getItem('backet')) || [];

function itemsInBacket() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = ''; 

    backet.forEach(item => {
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
        itemPrice.textContent = `${item.price} сум`;

        const quantityControls = document.createElement('div');
        quantityControls.classList.add('quantity-controls');

        const decreaseBtn = document.createElement('button');
        decreaseBtn.classList.add('quantity-btn');
        decreaseBtn.textContent = '-';

        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = item.count || 1; // Use item count or default to 1
        quantityInput.min = '1';
        quantityInput.classList.add('quantity-input');

        const increaseBtn = document.createElement('button');
        increaseBtn.classList.add('quantity-btn');
        increaseBtn.textContent = '+';

        quantityControls.appendChild(decreaseBtn);
        quantityControls.appendChild(quantityInput);
        quantityControls.appendChild(increaseBtn);


        increaseBtn.onclick = () => {
            item.count = (item.count || 1) + 1; 
            quantityInput.value = item.count;
            localStorage.setItem('backet', JSON.stringify(backet)); // Save updated cart to localStorage
            calculateTotal(backet); 
        };

        decreaseBtn.onclick = () => {
            if (item.count > 1) {
                item.count -= 1; 
                quantityInput.value = item.count;
            } else {
                alert('Товар был удален');
                backet.splice(backet.indexOf(item), 1); 
                itemsInBacket(); 
            }
            localStorage.setItem('backet', JSON.stringify(backet)); 
            calculateTotal(backet); 
        };

        //  delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Удалить';
        deleteBtn.onclick = () => {
            backet.splice(backet.indexOf(item), 1); 
            localStorage.setItem('backet', JSON.stringify(backet)); 
            itemsInBacket(); 
            calculateTotal(backet); 
        };

        itemDetails.appendChild(itemTitle);
        itemDetails.appendChild(itemPrice);
        itemDetails.appendChild(quantityControls);
        itemDetails.appendChild(deleteBtn);

        cartItem.appendChild(productImage);
        cartItem.appendChild(itemDetails);
        cartItemsContainer.appendChild(cartItem);
    });

    calculateTotal(backet); 
}

function calculateTotal(backet) {
    const totalPriceElement = document.querySelector('.summary-total'); 

    const totalPrice = backet.reduce((acc, item) => acc + (item.price * (item.count || 1)), 0);

    totalPriceElement.textContent = `Общая сумма: ${totalPrice} сум`;
}

itemsInBacket();
