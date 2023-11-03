const list = document.querySelector('.list');
let search = document.getElementById('search');
let btn = document.getElementById('btn');
let pricee = document.getElementById('pricee');
let el = document.querySelectorAll("#el");
let image = document.querySelectorAll("#image");
let inp1 = document.getElementById("inp1");
let log = document.getElementById("log");
let add = document.getElementById("add");
let hom = document.getElementById("hom");











// log.addEventListener("click", function () {
//     localStorage.setItem("qabul qilindi", `like`)
//     localStorage.getItem()
// })
const data = [
    {
        id:1,
        name: 'kolbasa',
        img: './img/kolbasa.png',
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        price: 599.99,
    },
    {
        id:2,
        name: 'product',
        img: './img/product.png',
        desc: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',
        price: 44.50,
    },
    {
        id:3,
        name: 'product',
        img: './img/product2.png',
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        price: 159.99,
    },
    {
        id:4,
        name: 'sut',
        img: './img/sut.png',
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        price: 49.39,
    },
    {
        id:5,
        name: 'tayyori',
        img: './img/tayyor.png',
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        price: 77.99,
    },
    {
        id:6,
        name: 'product',
        img: './img/product2.png',
        desc: 'Молоко сгущенное РОГАЧЕВ Егорка, цельное с сахаром...',
        price: 159.99,
    },

    {
        id:7,
        name: 'kolbasa',
        img: './img/kolbasa.png',
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        price: 599.99,
    },
    {
        id:8,
        name: 'sut',
        img: './img/sut.png',
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        price: 49.39,
    },
];

 window.addEventListener('DOMContentLoaded', function () {
         for (let i = 0; i < data.length; i++){
            
             if(data[i].id==2){

                list.innerHTML+=`
                <div class="card">
                <img src="${data[i].img}" />
                <h1>${data[i].price+"$"}</h1>
                <h3>${data[i].desc}</h3>
                <button  class="btn2">${"В кзину"}</button>
                `
             }else{
                list.innerHTML  += `<div class="card">
                <img src="${data[i].img}" />
                <h1>${data[i].price+"$"}</h1>
                <h3>${data[i].desc}</h3>
                <button class="btn1">${"В корзину"}</button>
                </div>`
             }
         }
         
     })
 window.addEventListener('DOMContentLoaded', function () {
     let displayitems = data.map(function (item) {
         return `
         <li id="el" data-id="${item.id}">
         <h2>${item.name}</h2>
         <img src="${item[i].img} alt="">
         </li>
         `
     })

   
     for (let i = 0; i < el.length; i++){
         console.log(el[i]);
     }
    
     })
search.addEventListener('keyup', function () {
     let displayitems = data.map(function (item) {
         if (search.value === item.name) {
             return `
             <div class="card">
             <img src="${item.img}" alt="">
             <h1>${item.price+"$"}</h1>
            <h3>${item.desc}</h3>
            <button class="btn1">${"В корзину"}</button>
             </div> 
             
         `
         }else{
         }

        
     })
     displayitems = displayitems.join('')
     list.innerHTML = displayitems;
 })

//  add.addEventListener('click', function () {
//     hom.classList.add('newhom');
//     console.log("z");
// })
//  bn.addEventListener('click', function () {
//     hom.classList.remove("newhom");
//  })
 
 