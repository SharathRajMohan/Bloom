const jsonData = [
  {
    id: "product1",
    brand: "Bloom",
    name: "Black T-Shirt",
    stars: 4,
    price: "$28",
    image: "img/products/pro1.jpeg",
    quantity: 1,
    description:
      "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary.",
  },
  {
    id: "product2",
    brand: "Bloom",
    name: "White Sweatshirt",
    stars: 4,
    price: "$40",
    image: "img/products/pro2.jpg",
    quantity: 1,
    description:
      "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary.",
  },
  {
    id: "product3",
    brand: "Bloom",
    name: "Grey Shirt",
    stars: 4,
    price: "$50",
    image: "img/products/pro3.jpg",
    quantity: 1,
    description:
      "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary.",
  },
  {
    id: "product4",
    brand: "Bloom",
    name: "Red Sweatshirt",
    stars: 4,
    price: "$20",
    image: "img/products/pro4.jpg",
    quantity: 1,
    description:
      "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary.",
  },
  {
    id: "product5",
    brand: "Bloom",
    name: "Sunflower Sweatshirt",
    stars: 4,
    price: "$35",
    image: "img/products/pro5.jpg",
    quantity: 1,
    description:
      "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary.",
  },
  {
    id: "product6",
    brand: "Bloom",
    name: "Perfect Sweatshirt",
    stars: 4,
    price: "$35",
    image: "img/products/pro6.jpg",
    quantity: 1,
    description:
      "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary.",
  },
  {
    id: "product7",
    brand: "Bloom",
    name: "Mountain Sweatshirt",
    stars: 4,
    price: "$25",
    image: "img/products/pro7.jpg",
    quantity: 1,
    description:
      "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary.",
  },
  {
    id: "product8",
    brand: "Bloom",
    name: "White Hoodie",
    stars: 4,
    price: "$35",
    image: "img/products/pro8.jpg",
    quantity: 1,
    description:
      "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary.",
  },
  {
    id: "product9",
    brand: "Bloom",
    name: "Planets Sweatshirt",
    stars: 4,
    price: "$35",
    image: "img/products/pro9.jpg",
    quantity: 1,
    description:
      "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary.",
  },
  {
    id: "product10",
    brand: "Bloom",
    name: "Flower Hoodie",
    stars: 4,
    price: "$50",
    image: "img/products/pro10.jpg",
    quantity: 1,
    description:
      "A shirt is a piece of clothing that you wear on the upper part of your body. Shirts have a collar, sleeves, and buttons down the front. 2. See also dress shirt, stuffed shirt, sweatshirt, T-shirt. Collins COBUILD Advanced Learner's Dictionary.",
  },
  // ... (similar entries for other products)
];

//var singleProdJson = [];
var cartJson = [];
// let cartCounter = 0; // Counter to keep track of the items added to the cart
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  let cartJson = JSON.parse(localStorage.getItem("cartJson")) || [];
  let cartCounterIn = localStorage.getItem("cartCounter") || 0;
  function initializeCart() {
    // Retrieve the cart counter from localStorage
    let cartCounterIn = localStorage.getItem("cartCounter") || 0;
    // Update the cart counter on the page
    if (cartCounterIn > 0) {
      let cartCounterElement = document.getElementById("main-bag");
      let mobileCounterElement = document.getElementById("mobile");
      cartCounterElement.innerHTML = `<a href="cart.html"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>${cartCounterIn}`;
      mobileCounterElement.innerHTML = `<a href="cart.html"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>${cartCounterIn}
            <i id="bar" class="fa fa-outdent" style="font-size:36px;"></i>`;
    } else {
      // If cartCounterIn is 0, hide the cart counter
      let cartCounterElement = document.getElementById("main-bag");
      let mobileCounterElement = document.getElementById("mobile");
      cartCounterElement.innerHTML = `<a href="cart.html" ><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>`;
      mobileCounterElement.innerHTML = `<a href="cart.html"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>
            <i id="bar" class="fa fa-outdent" style="font-size:36px;"></i>`;
    }
  }
  window.onload = function () {
    updateActiveClass();
    initializeCart();
  };
  function getCartJsonFromStorage() {
    const cartStoreJson = localStorage.getItem("cartJson");
    console.log("function cart json " + cartStoreJson);
    return cartStoreJson ? JSON.parse(cartStoreJson) : [];
  }

  function removeFromCart(productId) {
    // Retrieve and parse the cartJson from localStorage
    let cartJsonString = localStorage.getItem("cartJson");
    if (!cartJsonString) {
      console.log("Cart is empty.");
      return;
    }
    let cartJson = JSON.parse(cartJsonString);
    if (!Array.isArray(cartJson)) {
      console.log("Cart data is malformed.");
      return;
    }
    // Filter out the product with the given productId
    cartJson = cartJson.filter((item) => item.id !== productId);
    // Update the cartJson in localStorage
    localStorage.setItem("cartJson", JSON.stringify(cartJson));

    let totalQuantity = cartJson.reduce(
      (total, item) => total + item.quantity,
      0
    );

    // Update the cart counter on the page only if totalQuantity is greater than 0
    if (totalQuantity > 0) {
      let cartCounterElement = document.getElementById("main-bag");
      let mobileCounterElement = document.getElementById("mobile");
      cartCounterElement.innerHTML = `<a href="cart.html" class="active"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>${totalQuantity}`;
      mobileCounterElement.innerHTML = `<a href="cart.html" class="active"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>${totalQuantity}
        <i id="bar" class="fa fa-outdent" style="font-size:36px;"></i>`;
    } else {
      // If totalQuantity is 0, hide the cart counter
      let cartCounterElement = document.getElementById("main-bag");
      let mobileCounterElement = document.getElementById("mobile");
      cartCounterElement.innerHTML = `<a href="cart.html" class="active"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>`;
      mobileCounterElement.innerHTML = `<a href="cart.html" class="active"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>
        <i id="bar" class="fa fa-outdent" style="font-size:36px;"></i>`;
    }
    localStorage.setItem("cartCounter", totalQuantity);
    console.log("remove function " + localStorage.getItem("cartJson"));
    displayCart();
  }

  // Function to update quantity in the cart
  function updateQuantity(productId, newQuantity) {
    let cartJsonString = localStorage.getItem("cartJson");
    if (!cartJsonString) {
      console.log("Cart is empty.");
      return;
    }

    let cartJson = JSON.parse(cartJsonString);

    // Ensure cartJson is an array
    if (!Array.isArray(cartJson)) {
      console.log("Cart data is malformed.");
      return;
    }

    var item = cartJson.find((item) => item.id === productId);
    if (item) {
      item.quantity = parseInt(newQuantity, 10) || 1;
    }

    // Calculate the total quantity in the cart
    let totalQuantity = cartJson.reduce(
      (total, item) => total + item.quantity,
      0
    );

    // Update the cart counter on the page
    if (totalQuantity > 0) {
      let cartCounterElement = document.getElementById("main-bag");
      let mobileCounterElement = document.getElementById("mobile");
      cartCounterElement.innerHTML = `<a href="cart.html" class="active"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>${totalQuantity}`;
      mobileCounterElement.innerHTML = `<a href="cart.html" class="active"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>${totalQuantity}
            <i id="bar" class="fa fa-outdent" style="font-size:36px;"></i>`;
    } else {
      // If totalQuantity is 0, hide the cart counter
      let cartCounterElement = document.getElementById("main-bag");
      let mobileCounterElement = document.getElementById("mobile");
      cartCounterElement.innerHTML = `<a href="cart.html" class="active"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>`;
      mobileCounterElement.innerHTML = `<a href="cart.html" class="active"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>
            <i id="bar" class="fa fa-outdent" style="font-size:36px;"></i>`;
    }

    localStorage.setItem("cartJson", JSON.stringify(cartJson));
    localStorage.setItem("cartCounter", totalQuantity);
    displayCart();
  }

  function getStarIcons(starCount) {
    let starsHtml = "";
    for (let i = 0; i < starCount; i++) {
      starsHtml += '<i class="fa fa-star"></i>';
    }
    return starsHtml;
  }

  let productContainer = document.getElementById("productContainer");

  let selectedProduct = [];

  //var mainImg = document.getElementById("main");
  //var smallImgGroup = document.querySelector('.small-img-group');
  var singleProDetails = document.querySelector(".single-pro-details");

  function getSelectedProductFromStorage() {
    const storedProduct = localStorage.getItem("selectedProduct");
    return storedProduct ? JSON.parse(storedProduct) : null;
  }

  function getSingleProductFromStorage() {
    const selectedProductJson = localStorage.getItem("singleProdJson");
    return selectedProductJson ? JSON.parse(selectedProductJson) : null;
  }

  if (!!productContainer) {
    document.addEventListener("DOMContentLoaded", function () {
      selectedProduct = getSelectedProductFromStorage();
      // we can now use the selectedProduct object as needed
    });

    // function increaseCartCount() {}
    function addToCart(productId) {
      // Increment the cart counter
      cartCounterIn++;
      let cartCounterElement = document.getElementById("main-bag");
      let mobileCounterElement = document.getElementById("mobile");
      // to update the number displayed in the top right corner of the cart icon
      cartCounterElement.innerHTML = `<a href="cart.html"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>${cartCounterIn}`;

      mobileCounterElement.innerHTML = `<a href="cart.html"><img src="img/cartIcon.png" class="cartIcon" alt="Bag Icon"></a>${cartCounterIn}
      <i id="bar" class="fa fa-outdent" style="font-size:36px;"></i>`;
      const existingCartItem = cartJson.find((item) => item.id === productId);
      if (existingCartItem) {
        // If the product exists, increase the quantity
        existingCartItem.quantity += 1;
      } else {
        // If the product doesn't exist, add it to the cart
        const productToAdd = jsonData.find((item) => item.id === productId);
        const newCartItem = { ...productToAdd, quantity: 1 };
        cartJson.push(newCartItem);
      }
      localStorage.setItem("cartCounter", cartCounterIn);
      localStorage.setItem("cartJson", JSON.stringify(cartJson));
      // You can also implement additional logic here, such as adding the selected product to the shopping cart
      //copyDataToSelectedProduct(productId);
    }

    function copyDataToSelectedProduct(productId) {
      const selectedProductData = jsonData.find(
        (product) => product.id === productId
      );
      selectedProduct = { ...selectedProductData }; // Copy the data
      localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));

      singleProdJson = { ...selectedProductData };
      localStorage.setItem("singleProdJson", JSON.stringify(singleProdJson));

      // cartJson.push(selectedProduct);
      // localStorage.setItem('cartJson', JSON.stringify(cartJson));
    }

    // Function to handle click events
    function handleProductClick(productId) {
      //console.log("JSON:", JSON.stringify(jsonData));
      //let eventProdId = event.target.id;
      console.log("id :" + productId);
      copyDataToSelectedProduct(productId);

      console.log("Selected Product:", JSON.stringify(selectedProduct));
      // You can now use the selectedProduct object as needed
    }

    jsonData.forEach((product) => {
      let productLink = document.createElement("a");
      //productLink.href = 'singleproduct.html'; // Set the link to singleproduct.html

      let productId = product.id;
      productLink.id = product.id;

      let productDiv = document.createElement("div");
      productDiv.id = product.id;
      productDiv.className = "pro";
      productDiv.innerHTML = `
          <a href="singleproduct.html"> <img class="pro-img" src="${
            product.image
          }" alt="${product.name}"></a>
          <div class="des">
              <span>${product.brand}</span>
              <h5>${product.name}</h5>
              <div class="star">${getStarIcons(product.stars)}</div>
              <h4>${product.price}</h4>
          </div>
          <i class="fa fa-shopping-cart cart"></i>
      `;
      // let productOpen = productDiv.querySelector('.pro-img');
      productDiv.addEventListener("click", function () {
        handleProductClick(productId);
      });

      // Add a click event listener to the shopping cart icon in the product card
      let cartIcon = productDiv.querySelector(".cart");
      cartIcon.addEventListener("click", function () {
        addToCart(productId);
      });

      productLink.appendChild(productDiv);
      productContainer.appendChild(productLink);
    });
  }

  const mainImg = document.getElementById("mainImg");
  if (window.location.pathname.includes("singleproduct.html")) {
    const selectedProductJson = getSingleProductFromStorage();
    console.log("Selected Product inner:", JSON.stringify(selectedProductJson));
    let singleProductId = selectedProductJson.id;
    if (selectedProductJson) {
      mainImg.src = selectedProductJson.image;

      // Populate other product details
      singleProDetails.innerHTML = `
      <h6>${selectedProductJson.brand}</h6>
      <h4>${selectedProductJson.name}</h4>
      <h2>${selectedProductJson.price}</h2>
      <select id="sizeSelect">
          <option>Select Size</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>X-Large</option>
      </select>
      <input type="number" value="1">
      <button  id="spAddCart" class="normal">Add to cart</button>
      <h4>Product details</h4>
      <span>${selectedProductJson.description}</span>
      `;
    }

    // Add a click event listener to the shopping cart icon in the product card
    let SingleProdAdd = singleProDetails.querySelector("#spAddCart");
    SingleProdAdd.addEventListener("click", function () {
      let selectedSize = document.getElementById("sizeSelect").value;
      if (selectedSize === "Select Size") {
        alert("Please select a size before adding to cart.");
        return;
      }
      addToCart(singleProductId);
    });
  }

  // Function to display the cart in cart.html
  if (window.location.pathname.includes("cart.html")) {
    function displayCart() {
      //var myAnchor = document.getElementById('myAnchor');
      var cartTableBody = document.getElementById("cart-table-body");
      cartTableBody.innerHTML = "";

      const getCartJson = getCartJsonFromStorage();
      console.log("get cart json " + typeof getCartJson);
      // Check if getCartJson is not undefined before attempting to iterate
      if (getCartJson) {
        var subtotal = 0;

        getCartJson.forEach((innerItem) => {
          var row = document.createElement("tr");
          const item =
            typeof innerItem === "string" ? JSON.parse(innerItem) : innerItem;
          console.log("inside foreach items" + typeof item);
          // Extract numerical value from the price (remove the dollar sign and convert to a number)
          var itemPrice = parseFloat(item.price.replace("$", ""));

          var itemSubtotal = itemPrice * item.quantity;
          subtotal += itemSubtotal;

          row.innerHTML = `
                    <td><a href="" class="remove-from-cart"><i class="fa fa-times-circle"></i></a></td>
                    <td><img src="${item.image}" alt="${item.name}"></td>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td><input type="number" value="${item.quantity}" class="update-quantity"></td>
                    <td>${itemSubtotal}</td>
                    `;
          cartTableBody.appendChild(row);

          const removeButton = row.querySelector(".remove-from-cart");
          const quantityInput = row.querySelector(".update-quantity");

          removeButton.addEventListener("click", function () {
            removeFromCart(item.id);
          });

          quantityInput.addEventListener("change", function () {
            updateQuantity(item.id, this.value);
          });
        });

        // Check if subtotal is defined before using toFixed method
        if (subtotal !== undefined) {
          var subtotalElement = document.getElementById("subtotal-amount");
          var totalElement = document.getElementById("total-amount");
          var shipElement = document.getElementById("ship-amount");

          subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
          if (subtotal <= 50 && subtotal > 0) {
            let shipCharge = 10;
            let totalAmount = subtotal + 10;
            shipElement.textContent = `$${shipCharge.toFixed(2)}`;
            totalElement.textContent = `$${totalAmount.toFixed(2)}`;
          } else {
            shipElement.textContent = "Free";
            totalElement.textContent = `$${subtotal.toFixed(2)}`;
          }
        }
      }
    }

    // Call the displayCart function
    displayCart();
  }

  // Function to update the active class based on the current page
  function updateActiveClass() {
    var links = document.querySelectorAll("#navbar a");
    var currentPage = window.location.href;
    links.forEach(function (link) {
      // Check if the current page includes the link's href or if the link represents the "Cart" page
      if (
        currentPage.includes(
          link.getAttribute("href") || link.getAttribute("href") === "cart.html"
        )
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // function to initially set the active class

  displayCart();
});

if (window.location.pathname.includes("index.html")) {
  // redirect to shop functionality
  let homeButton1 = document.getElementById("homeButton");
  homeButton1.addEventListener("click", redirectToPage);

  let homeButton2 = document.getElementById("homeButton2");
  homeButton2.addEventListener("click", redirectToPage);

  let homeButton3 = document.getElementById("homeButton3");
  homeButton3.addEventListener("click", redirectToPage);

  function redirectToPage(pageFilename) {
    window.location.href = "shop.html";
  }
}
