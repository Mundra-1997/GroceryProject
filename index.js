let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').addEventListener('click',function(){
    searchForm.classList.toggle('active');
})
let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').addEventListener('click',function(){
    shoppingCart.classList.toggle('active');
})
let loginPage = document.querySelector('.login-form');
document.querySelector('#login-btn').addEventListener('click',function(){
    loginPage.classList.toggle('active');
})

let loginP = document.querySelector('.navbar');
document.querySelector('#menu-btn').addEventListener('click',function(){
    loginP.classList.toggle('active');
})

