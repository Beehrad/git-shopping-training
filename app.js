const modalBtn = document.querySelector(".charkh")
const modal = document.querySelector(".modal")
const backdrop = document.querySelector(".backdrop")
const confirmBtn = document.querySelector(".confirm")
const addCount = document.querySelector(".fa-chevron-up")
const productItem = document.querySelector(".cart-item")
const productsDom = document.querySelector(".products")


import { productsData } from "./products.js";

// 1.get products

class Products{
    getProducts(){
        return productsData
    }
};


// 2.display products

class UI{
    displayProducts(mahsool){
        let result = "";
        mahsool.forEach((item) => {
            result += `<div class="item">
            <img src="${item.imageUrl}" alt="">
            <div>
                <p>$ ${item.price}</p>
                <p>${item.title}</p>
            </div>
            <button data-id =${item.id}>add to cart</button>
        </div>`  
        });
        productsDom.innerHTML = result;
    }
}




document.addEventListener("DOMContentLoaded",()=>{
    const mahsool = new Products();
    const mahsoolsData = mahsool.getProducts();
    const ui = new UI()
    ui.displayProducts(mahsoolsData);
    
    console.log(mahsoolsData)
    

})


modalBtn.addEventListener("click" , ()=>{
    backdrop.style.display = "flex"
    modal.style.transform = "translateY(0vh)";
    modal.style.opacity = "1"
})

confirmBtn.addEventListener("click" , ()=>{
    backdrop.style.display = "none"
    modal.style.transform = "translateY(-100vh)";
    modal.style.opacity = "0"
})


