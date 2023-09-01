const d = document;

const products = {
    data:[
        {
            productName: "Regular white T-Shirt",
            category: "Topwear",
            price: "30",
            image: "https://elements-cover-images-0.imgix.net/5f592c3c-1a5e-4cbd-a67d-0312e5721110?auto=compress%2Cformat&fit=max&w=900&s=42e4650e9a8ce1d8a87cc6ea0761e794"
        },
        {
            productName: "Sporty SmartWatch",
            category: "Watch",
            price: "35",
            image: "https://tatauy.vtexassets.com/arquivos/ids/402510/image_1.jpg?v=637928820213870000"
        },
        {
            productName: "Bassic Knitted Top",
            category: "Topwear",
            price: "50",
            image: "https://frostingandconfetti.com/wp-content/uploads/2021/03/knit-top-patterns-1.jpg"
        },
        {
            productName: "Black Leather Jacket",
            category: "Jacket",
            price: "80",
            image: "https://www.psfreebies.com/wp-content/uploads/2022/06/Free-Bomber-Jacket-Mockup-1-scaled.jpg"
        },
        {
            productName: "Beige Short skirt",
            category: "Bootomwear",
            price: "36",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8W6UPZ34KHwA2i7avdz63LvZPnkpg1_Smw"
        },
        {
            productName: "Stylish Pink Trousers",
            category: "Bottomwear",
            price: "85",
            image: "https://stylesatlife.com/wp-content/uploads/2019/06/10-Stylish-Designs-of-Pink-Trousers-for-Men-and-Women-in-Fashion.jpg"
        },
        {
            productName: "Brown Men's Jacket",
            category: "Jacket",
            price: "130",
            image: "https://i.insider.com/631f555c89d2b3001894a5b0?width=1000&format=jpeg&auto=webp"
        },
        {
            productName: "Comfy Gray Pants",
            category: "Bottomwear",
            price: "60",
            image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/ae4e3dfda17b4b6b9829ad23002e436e_9366/adidas_Sportswear_Comfy_and_Chill_Pants_Grey_H45376.jpg"
        },
    ]
}

for (const i of products.data) {
    let card = d.createElement('div');
    card.classList.add('card', i.category.toLocaleLowerCase());

    let imgContainer = d.createElement('div');
    imgContainer.classList.add('img-container');

    let image = d.createElement('img');
    image.setAttribute('src', i.image);

    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = d.createElement('div');
    container.classList.add('container');

    let name = d.createElement('h5');
    name.classList.add('product-name');
    name.textContent = i.productName.toUpperCase();
    container.appendChild(name);

    let price = d.createElement('p');
    price.classList.add('product-price');
    price.innerText = `$ ${i.price}.00`;

    container.appendChild(price);

    card.appendChild(container);
    d.querySelector('.products').appendChild(card);

}



let cards = d.querySelectorAll('.card');
let buttonSearch = d.querySelector('#search');
let nameCards = d.querySelector('.product-name');


buttonSearch.addEventListener('click', ()=>{
    let valueInput = d.querySelector('#search-input').value;

    cards.forEach(card =>{
        let cardName = card.querySelector('.product-name').textContent.toLocaleLowerCase();
        if(cardName.includes(valueInput)){
            card.classList.remove('hide');
        }else{
            card.classList.add('hide');
        }
    })

})

function filtrarCard(value){
    let buttons = d.querySelectorAll('.button-valor');
    
    buttons.forEach(button =>{

        if(value == button.innerText.toLocaleLowerCase()){
            button.classList.add('active');
        }else{
            button.classList.remove('active');
        }
            
            showCard(value);
             
    })
    
}

function showCard(value){
    cards.forEach(card =>{
      if(value == "all"){
        card.classList.remove('hide');
      }else if(card.classList.contains(value)){
        card.classList.remove('hide');
      }else{
        card.classList.add('hide');
      }

    })
}


window.addEventListener('DOMContentLoaded', ()=>{
    filtrarCard("all");
});