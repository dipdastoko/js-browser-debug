const loadProduct = () => {
    let nameField = document.getElementById('product-name');
    let priceField = document.getElementById('product-price');

    const name = nameField.value;
    const price = priceField.value;

    //display product details
    displayProduct(name, price);

    //add to cart
    getCart();

    nameField.value = '';
    priceField.value = '';

}

const displayProduct = (name, price) => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = `
    Name: ${name}
    Price: ${price}
    `;
    ul.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
        console.log('yes found it');
    }
    else {
        console.log('alas! i am undone');
    }
}