let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').addEventListener('click',function(){
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginPage.classList.remove('active');
    navbar.classList.remove('active');

})
let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').addEventListener('click',function(){
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginPage.classList.remove('active');
    navbar.classList.remove('active');
})
let loginPage = document.querySelector('.login-form');
document.querySelector('#login-btn').addEventListener('click',function(){
    loginPage.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
})
let navbar = document.querySelector('.navbar')
document.querySelector('#menu-btn').addEventListener('click',function(){
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginPage.classList.remove('active');
})
window.onscroll = ()=>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginPage.classList.remove('active');
    navbar.classList.remove('active');
}
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
       
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

