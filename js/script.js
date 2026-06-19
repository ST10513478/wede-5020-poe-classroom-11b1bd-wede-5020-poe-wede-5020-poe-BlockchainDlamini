function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({name, price});
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(name + "added to cart!");
}

document.querySelectorAll('.add-to-cart').forEach(button =>{
    button.addEventListener('click', (e) => {
        const card= e.target.closet('.products-card');
        const name= card.getAttribute('data-name');
        const price= card.getAttribute('data-price');

        addToCart(name, price)
    })
})

document.addEventListener('DOMContentLoaded', () =>{
    const cartList= document.getElementById('cartList');
    if (cartList){
        renderCart();
    }
})

function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const list = document.getElementById('cartList');
    const totalDisplay = document.getElementById(totalPrice);
    let total = 0

    list.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R${item.price}`;
        list.appendChild(li);
        total += parseFloat(item.price);
    });
    totalDisplay.textContent = total;
    
}