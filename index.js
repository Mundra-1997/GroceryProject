let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').addEventListener('click',function(){
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginPage.classList.remove('active');
    navbar.classList.remove('active');

})
let shoppingCart = document.querySelector('.shopping-cart');
let shoppingCart1 = document.querySelector('.shopping-cart1');

let flag  = 0;
document.querySelector('#cart-btn').addEventListener('click',function(){
  
    searchForm.classList.remove('active');
    loginPage.classList.remove('active');
    navbar.classList.remove('active');
    if(flag===0){
      
      shoppingCart.classList.toggle('active');

    }
    else{
     
      shoppingCart1.classList.toggle('active');
      
      calculate();
          if(qtOnion>0){
            //  document.getElementById('showonion').innerText = `${qtOnion}`

             document.getElementById('cartonion').classList.remove('box');
             document.getElementById('cartonion').classList.add('doggo');
             update();
          }
          if(qtPatato>0){
            //  document.getElementById('showpatato').innerText = `${qtPatato}`
            document.getElementById('cartpatato').classList.remove('box');
             document.getElementById('cartpatato').classList.add('doggo');
             update();
             
          }
          if(qtAvocado>0){
            // document.getElementById('showavocado').innerText = `${qtAvocado}`
            document.getElementById('cartavocado').classList.remove('box');
             document.getElementById('cartavocado').classList.add('doggo');
             update();
         }
         if(qtOrange>0){
          // document.getElementById('showorange').innerText = `${qtOrange}`
          document.getElementById('cartorange').classList.remove('box');
          document.getElementById('cartorange').classList.add('doggo');
          update();
       }
       if(qtCarrot>0){
        // document.getElementById('showcarrot').innerText = `${qtCarrot}`
        document.getElementById('cartcarrot').classList.remove('box');
             document.getElementById('cartcarrot').classList.add('doggo');
             update();
     }
     if(qtCabbage>0){
      // document.getElementById('showcabbage').innerText = `${qtCabbage}`
      document.getElementById('cartcabbage').classList.remove('box');
             document.getElementById('cartcabbage').classList.add('doggo');
             update();
   }
    }

})
function update(){
  document.getElementById('showonion').innerText = `${qtOnion}`;
  document.getElementById('showpatato').innerText = `${qtPatato}`;
  document.getElementById('showavocado').innerText = `${qtAvocado}`;
  document.getElementById('showorange').innerText = `${qtOrange}`;
  document.getElementById('showcarrot').innerText = `${qtCarrot}`;
  document.getElementById('showcabbage').innerText = `${qtCabbage}`;
}

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
        delay:5500,
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
  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:5500,
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
 

  const priceOrange = 60;
  const priceOnion = 25;
  const pricePatato = 20;
  const priceCarrot = 20;
  const priceAvocado = 150;
  const priceCabbage = 20;
  
  let qtOrange = 0;
  let qtOnion = 0;
  let qtPatato = 0;
  let qtCarrot = 0;
  let qtAvocado = 0;
  let qtCabbage = 0;
  function nowhere(){
    if(qtAvocado==0 && qtCabbage==0 && qtCarrot==0 && qtOnion==0 && qtOrange==0 && qtPatato==0){
      
      shoppingCart.classList.toggle('active');

    }
  }
  nowhere();
  
  function showCartvalueonTop(){
    document.getElementById('cartnumber').innerText=qtAvocado+qtCabbage+qtCarrot+qtOnion+qtOrange+qtPatato;
  }
  


  document.getElementById('orange1').addEventListener('click',()=>{
    flag++;
    qtOrange++;
    showCartvalueonTop();
    console.log(qtOrange);
    

    
  })
  document.getElementById('onion2').addEventListener('click',()=>{
    qtOnion++;
    flag++;
    showCartvalueonTop();
    console.log(qtOnion);
  })
  document.getElementById('cabbage3').addEventListener('click',()=>{
    qtCabbage++;
    flag++;
    showCartvalueonTop();
    console.log(qtCabbage);
  })
  document.getElementById('patatoes4').addEventListener('click',()=>{
    qtPatato++;
    flag++;
    showCartvalueonTop();
    console.log(qtPatato);
  })
  document.getElementById('avocados5').addEventListener('click',()=>{
    qtAvocado++;
    flag++;
    showCartvalueonTop();
    console.log(qtAvocado);
  })
  document.getElementById('carrots6').addEventListener('click',()=>{
    qtCarrot++;
    flag++;
    showCartvalueonTop();
    console.log(qtCarrot);
  })

document.getElementById('increonion').addEventListener('click',()=>{
  qtOnion++;
  update();
  showCartvalueonTop();
  calculate();
})
document.getElementById('decreonion').addEventListener('click',()=>{
  qtOnion--;
  calculate();
  showCartvalueonTop();
  if(qtOnion===0){
    document.getElementById('cartonion').classList.add('box');
    document.getElementById('cartonion').classList.remove('doggo');
    
  }
  
  update();
})
document.getElementById('increcarrot').addEventListener('click',()=>{
  qtCarrot++;
  showCartvalueonTop();
  update();
  calculate();
})
document.getElementById('decrecarrot').addEventListener('click',()=>{
  qtCarrot--;
  calculate();
  showCartvalueonTop();
  if(qtCarrot===0){
    document.getElementById('cartcarrot').classList.add('box');
    document.getElementById('cartcarrot').classList.remove('doggo');
    return;
  }
  
  update();
})
document.getElementById('increcabbage').addEventListener('click',()=>{
  qtCabbage++;
  showCartvalueonTop();
  calculate();
  update();
})
document.getElementById('decrecabbage').addEventListener('click',()=>{
  qtCabbage--;
  showCartvalueonTop();
  calculate();
  if(qtCabbage===0){
    document.getElementById('cartcabbage').classList.add('box');
    document.getElementById('cartcabbage').classList.remove('doggo');
    return;
  }
  
  update();
})
document.getElementById('increpatato').addEventListener('click',()=>{
  qtPatato++;
  calculate();
  update();
  showCartvalueonTop();
})
document.getElementById('decrepatato').addEventListener('click',()=>{
  qtPatato--;
  showCartvalueonTop();
  calculate();
  if(qtPatato===0){
    document.getElementById('cartpatato').classList.add('box');
    document.getElementById('cartpatato').classList.remove('doggo');
    return;
  }
  
  update();
})
document.getElementById('increavocado').addEventListener('click',()=>{
  qtAvocado++;
  showCartvalueonTop();
  calculate();
  update();
})
document.getElementById('decreavocado').addEventListener('click',()=>{
  qtAvocado--;
  showCartvalueonTop();
  calculate();
  if(qtAvocado===0){
    document.getElementById('cartavocado').classList.add('box');
    document.getElementById('cartavocado').classList.remove('doggo');
    return;
  }
  
  update();
})
document.getElementById('increorange').addEventListener('click',()=>{
  qtOrange++;
  showCartvalueonTop();
  calculate();
  update();

})
document.getElementById('decreorange').addEventListener('click',()=>{
  qtOrange--;
  showCartvalueonTop();
  calculate();
  if(qtOrange===0){
    document.getElementById('cartorange').classList.add('box');
    document.getElementById('cartorange').classList.remove('doggo');
    return;
  }
  
  update();
})
function calculate(){
  let total = priceAvocado*qtAvocado + priceCabbage*qtCabbage + priceCarrot*qtCarrot + priceOnion*qtOnion + priceOrange*qtOrange + pricePatato*qtPatato;
  document.getElementById('bill').innerText = `Rs - ${total}`;
}
document.getElementById('calculate').addEventListener('click',()=>{
           calculate();
})