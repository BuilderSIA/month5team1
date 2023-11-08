

let  elList = document.querySelector(".pradact")
let elSearch = document.querySelector(".nav__form__inp__input")
const form = document.querySelector(".nav__form")
let elnash = document.querySelector(".nashi")

const sb = document.querySelector('.search__btn');
const url = "https://fakestoreapi.com/products"



sb.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(url)
    .then((res) => res.json())
        .then((data) => {
            let display = data.map((item) => {
                if (item.title === elSearch.value) {
                    return `
                <li class="listt">
                <h2>${item.title}</h2>
                <img
                class="pradact__card__images__photo"
                src="${item.image}"
                alt="un"
            />
            <div class="pradact__card__title">
            <h2>${item.price} ₽</h2>
            </div>
                </li>
                    `
            }
            })
            elList.innerHTML = display.join(" ");
    })
})


function renderData(){
   
    fetch(url)
    .then(res => res.json())
    .then(data =>  data.map((element, i) => {
       

        let elItem = document.createElement("li")
        elItem.setAttribute("class", "pradact__card")    
        elItem.innerHTML = `
            <div class="pradact__card__images">
            <img
                class="pradact__card__images__photo"
                src="${element.image}"
                alt="un"
            />
            </div>
            <div class="like">
            <i class="fa-solid fa-heart"></i>
            </div>
            <div class="pradact__card__title">
            <h2>${element.price} ₽</h2>
            </div>
            <h2 class="tt"> ${element.title}</h2>
           
            <div class="pradact__star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <button class="info">info</button>
            </div>
            <div class="pradact__btn">
            <button class="pradact__btn__style" onClick="karzinkaBtn(${element.id})" >В корзину</button>
            </div>
        `

        elList.appendChild(elItem)
    }))
} 
 

renderData(allProducts)

renderData(allProducts)






form.addEventListener("submit", (e) => {
    e.preventDefault();
    let emptyArr = [];


    allProducts.map((item ) => {
        if(item.productName.includes(elSearch.value)){
            emptyArr.push(item)
        }
        
    })
    if(emptyArr.length > 0){
        elList.innerHTML = ""
        renderData(emptyArr)
    }
    else{
        elList.innerHTML = "<h1>Data not found</h1>"

        // renderData(allProducts)s

    }
})

const heart = document.querySelector(".pradact")
let a = JSON.parse(localStorage.getItem("liked")) || []
heart.addEventListener("click", (e) =>{
    let likedProduct = e.target.closest(".fa-heart")
    if(likedProduct){
        if(likedProduct.toggleAttribute("true")){
            let s =likedProduct.style = `color:red` ;
            a.push(s)
            localStorage.setItem("liked", JSON.stringify(a))
        } else{
            likedProduct.style = `color:#000`
        }
    }

    if(e.target.closest(".pradact__btn__style")){

        if(e.target.closest(".pradact__btn").toggleAttribute("true")){
            e.target.closest(".pradact__btn").style = `background-color: gold`;
            e.target.closest(".pradact__btn__style").style = `color:#000; background-color: transparent`    
        } else{
            e.target.closest(".pradact__btn").style = `background-color: #fff`;
            e.target.closest(".pradact__btn__style").style = `color:green; background-color: transparent`
        }
        // e.target.closest(".pradact__btn").style = `background-color: gold`;
        // e.target.closest(".pradact__btn__style").style = `color:#fff; background-color: transparent`
    }

    if(e.target.closest(".nashi__btn__style")){

        if(e.target.closest(".nashi__btn").toggleAttribute("true")){
            e.target.closest(".nashi__btn").style = `background-color: gold`;
            e.target.closest(".nashi__btn__style").style = `color:#000; background-color: transparent`    
        } else{
            e.target.closest(".nashi__btn").style = `background-color: #fff`;
            e.target.closest(".nashi__btn__style").style = `color:green; background-color: transparent`
        }
       
    }

})


function karzinkaBtn(id) {
    fetch(url)
    .then(res => res.json())
    .then(data =>  data.filter((item)=>{
        if(item.id == id){
            setProduct(item)
         console.log(item.id);
        }
    }))
   
}



function getProduct(){
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')):[];
}

function setProduct(cart){
    let item = {cart};
    prod = getProduct();
    prod.push(item);
    localStorage.setItem('cart',JSON.stringify(prod))
}