function addToCart(name, price){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({name, price});
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(name + "added to cart!");
}

document.querySelectorAll('.add to cart').forEach(button =>{
    button.addEventListener('click', (e) => {
        const card= e.target.closet('.products-card');
        const name= card.getAttribute('data-name');
        const price= card.getAttribute('data-price');

        addToCart(name, price)
    })
})