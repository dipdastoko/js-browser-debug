const loadProduct = () => {
    let nameField = document.getElementById('product-name');
    let priceField = document.getElementById('product-price');

    const name = nameField.value;
    const price = priceField.value;

    if (name === '' || price === '') {
        return;
    }

    //display product details
    displayProduct(name, price);

    //add to cart
    addToCart(name, price);

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
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}

const addToCart = (name, price) => {
    const cart = getCart();
    cart[name] = price;
    if (cart[name]) {
        cart[name] = price;
    }
    else {
        cart[name] = price;
    }

    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
const displayLocalStorage = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProduct(name, cart[name]);
    }
}
displayLocalStorage();