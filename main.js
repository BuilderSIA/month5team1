

let  elList = document.querySelector(".pradact")
let elSearch = document.querySelector(".nav__form__inp__input")
const form = document.querySelector(".nav__form")
let elnash = document.querySelector (".nashi")



function renderData(allData){
    allData.map((element, i) => {
        
        let elItem = document.createElement("li")
        elItem.setAttribute("class", "pradact__card")    
        elItem.innerHTML = `
            <div class="pradact__card__images">
            <img
                class="pradact__card__images__photo"
                src="${element.productImg}"
                alt="un"
            />
            <i class="fa-solid fa-heart"></i>
            </div>
            <div class="pradact__card__title">
            <h2>${element.productPrice} ₽</h2>
            </div>
            <h2>${element.productName}</h2>
            <h3 class="pradact__text">
            ${element.productDesc}
            </h3>
            <div class="pradact__star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            </div>
            <div class="pradact__btn">
            <button class="pradact__btn__style">В корзину</button>
            </div>
        `
        elList.appendChild(elItem)
    })
}

renderData(allProducts)


// elSearch.addEventListener("input", () => {
//     let emptyArr = [];

//     allProducts.map((item ) => {
//         if(item.productName.includes(elSearch.value)){
//             emptyArr.push(item)
//         }
        
//     })
//     if(emptyArr.length > 0){
//         elList.innerHTML = ""
//         renderData(emptyArr)
//     }
//     else{
//         elList.innerHTML = "<h1>Data not found</h1>"

//         // renderData(allProducts)

//     }
//     // console.log();
// })



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


