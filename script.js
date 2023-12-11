const jsonData = [
    {
        "id" : "product1",
          "brand": "Adidas",
          "name": "Some name 1",
          "stars": 4,
          "price": "$78",
          "image": "img/products/pro1.jpeg",
          "description" : "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary."
      },
      {
        "id" : "product1",
          "brand": "Adidas",
          "name": "Some name 1",
          "stars": 4,
          "price": "$78",
          "image": "img/products/pro1.jpeg",
          "description" : "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary."
      },
      {
        "id" : "product1",
          "brand": "Adidas",
          "name": "Some name 1",
          "stars": 4,
          "price": "$78",
          "image": "img/products/pro1.jpeg",
          "description" : "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary."
      },
      {
        "id" : "product1",
          "brand": "Adidas",
          "name": "Some name 1",
          "stars": 4,
          "price": "$78",
          "image": "img/products/pro1.jpeg",
          "description" : "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary."
      },
      {
        "id" : "product1",
          "brand": "Adidas",
          "name": "Some name 1",
          "stars": 4,
          "price": "$78",
          "image": "img/products/pro1.jpeg",
          "description" : "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary."
      },
      {
        "id" : "product1",
          "brand": "Adidas",
          "name": "Some name 1",
          "stars": 4,
          "price": "$78",
          "image": "img/products/pro1.jpeg",
          "description" : "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary."
      },
      {
        "id" : "product1",
          "brand": "Adidas",
          "name": "Some name 1",
          "stars": 4,
          "price": "$78",
          "image": "img/products/pro1.jpeg",
          "description" : "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary."
      },
      {
        "id" : "product1",
          "brand": "Adidas",
          "name": "Some name 1",
          "stars": 4,
          "price": "$78",
          "image": "img/products/pro1.jpeg",
          "description" : "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary."
      },
      {
        "id" : "product1",
          "brand": "Adidas",
          "name": "Some name 1",
          "stars": 4,
          "price": "$78",
          "image": "img/products/pro1.jpeg",
          "description" : "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary."
      },
      {
        "id" : "product1",
          "brand": "Adidas",
          "name": "Some name 1",
          "stars": 4,
          "price": "$78",
          "image": "img/products/pro1.jpeg",
          "description" : "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary."
      },
    // ... (similar entries for other products)
];



const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close')

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

document.addEventListener('DOMContentLoaded', function () {
    

    function getStarIcons(starCount) {
        let starsHtml = '';
        for (let i = 0; i < starCount; i++) {
            starsHtml += '<i class="fa fa-star"></i>';
        }
        return starsHtml;
    }

    let productContainer = document.getElementById('productContainer');
    let cartCounter = 0; // Counter to keep track of the items added to the cart
    let cartCounterElement = document.getElementById('main-bag');
    let mobileCounterElement = document.getElementById('mobile');
    if(!!(productContainer)){
    function addToCart() {
        // Increment the cart counter
        cartCounter++;

        // Update the number displayed in the top right corner of the cart icon
        cartCounterElement.innerHTML = `<a href="cart.html"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>${cartCounter}`;

        mobileCounterElement.innerHTML = `<a href="cart.html"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>${cartCounter}
        <i id="bar" class="fa fa-outdent" style="font-size:36px;"></i>`
        // You can also implement additional logic here, such as adding the selected product to the shopping cart
    }

    jsonData.forEach(product => {
        let productLink = document.createElement('a');
        //productLink.href = 'singleproduct.html'; // Set the link to singleproduct.html

        let productDiv = document.createElement('div');
        productDiv.className = 'pro';
        productDiv.innerHTML = `
            <a href="singleproduct.html"><img class="pro-img" src="${product.image}" alt="${product.name}"></a>
            <div class="des">
                <span>${product.brand}</span>
                <h5>${product.name}</h5>
                <div class="star">${getStarIcons(product.stars)}</div>
                <h4>${product.price}</h4>
            </div>
            <i class="fa fa-shopping-cart cart"></i>
        `;

        // Add a click event listener to the shopping cart icon in the product card
        let cartIcon = productDiv.querySelector('.cart');
        cartIcon.addEventListener('click', addToCart);

        productLink.appendChild(productDiv);
        productContainer.appendChild(productLink);
    });
}

    var currentPage = window.location.href;

    // Function to update the active class based on the current page
    function updateActiveClass() {
        var links = document.querySelectorAll('#navbar a');
        links.forEach(function (link) {
            if (currentPage.includes(link.getAttribute('href'))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // function to initially set the active class
    updateActiveClass();
});

// redirect to shop functionality
let homeButton = document.getElementById('homeButton');
homeButton.addEventListener('click', redirectToPage);
function redirectToPage(pageFilename) {
    window.location.href = 'shop.html';
}

