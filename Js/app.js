const iconCart = document.querySelector(".icon-cart img");
const cart = document.querySelector(".cart");
iconCart.onclick = () =>{
    if(cart.style.display == "block"){
        cart.style.display = "none";
    }else{
        cart.style.display = "block";
    }
}

const addtocartBtn = document.querySelector(".addtocartBtn");
let counter = document.querySelector(".counter");
let num = 0;
counter.innerText = num ;
const itemNum = document.querySelector(".itemNum");
const emptyRow = document.querySelector(".emptyRow");
const cartRow = document.querySelector(".cartRow");
const totalItem = document.querySelector("#totalItem");
const total = document.querySelector("#total");
addtocartBtn.addEventListener("click",()=>{
    itemNum.style.display = "flex";
    itemNum.innerText = counter.innerText;
    emptyRow.style.display = "none";
    cartRow.style.display = "flex";
    totalItem.innerText = counter.innerText;
    total.innerText = "$" + 125.00 * counter.innerText;
})
const iconMinus = document.querySelector(".icon-minus");
const iconPlus = document.querySelector(".icon-plus");

iconMinus.addEventListener("click",()=>{
num-- ;
if(num < 0){
    num = 0 ;
}
counter.innerText = num ;
})

iconPlus.addEventListener("click",()=>{
    num++ ;
    counter.innerText = num ;
})

const deleteBtn = document.querySelector(".deleteBtn");
deleteBtn.addEventListener("click",()=>{
    itemNum.style.display = "none";
    emptyRow.style.display = "flex";
    cartRow.style.display = "none"; 
})


let productImages = ['images/image-product-1.jpg','images/image-product-2.jpg','images/image-product-3.jpg','images/image-product-4.jpg'];
const fullImg = document.querySelector(".fullImg img");
// fullImg.src = productImages[2];
const smallimg = document.querySelectorAll(".smallimg");
const images = document.querySelectorAll(".smallimg img");
smallimg[0].classList.add("activeClass");
images[0].style.opacity = "40%";
smallimg.forEach((value,index)=>{
    value.addEventListener("click",()=>{
      images[0].style.opacity = "";
      images[1].style.opacity = "";
      images[2].style.opacity = "";
      images[3].style.opacity = "";
      images[index].style.opacity = "40%";
      smallimg[0].classList.remove("activeClass");
      smallimg[1].classList.remove("activeClass");
      smallimg[2].classList.remove("activeClass");
      smallimg[3].classList.remove("activeClass");
      smallimg[index].classList.add("activeClass");
      fullImg.src = productImages[index];
    })
})


const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector('.nextBtn');
let count = 0;
nextBtn.addEventListener("click",()=>{
  count++;
  if(count > 3){
    count = 0;
  }
  fullImg.src = productImages[count];
})
prevBtn.addEventListener("click",()=>{
    count--;
    if(count < 0){
      count = 3;
    }
    fullImg.src = productImages[count];
  })

const respMenu = document.querySelector(".respMenu");  
const closeNav = document.querySelector("#closeNav");
const menuIcon = document.querySelector(".menuIcon");
closeNav.addEventListener("click",()=>{
 respMenu.style.display = "none";
})

menuIcon.addEventListener("click",()=>{
    respMenu.style.display = "block";
})



popwindow = () =>{
  console.log("hello from abhishek");
}



fullImg.addEventListener("click",popwindow);


if(window.innerWidth <= 370){fullImg.removeEventListener("click",popwindow)};




