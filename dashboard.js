const products = [
    { id: 1, name: "Chocolate Bar", price: 1.50 },
    { id: 2, name: "Gummy Bears", price: 2.00 },
    { id: 3, name: "Lollipop", price: 0.75 },
    // Add more products as needed
];

const productSelect = document.getElementById("product-select");
const productsList = document.getElementById("products");
const cartList = document.getElementById("cart");
const cartTotal = document.getElementById("cart-total");
const totalSales = document.getElementById("total-sales");

// Populate product select dropdown
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.text = product.name;
    productSelect.appendChild(option);
});

// Display products in the product list
products.forEach(product => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price.toFixed(2)}`;
    productsList.appendChild(li);
});

let cart = [];

function addToCart() {
    const productId = parseInt(productSelect.value);
    const quantity = parseInt(document.getElementById("quantity-input").value);

    const selectedProduct = products.find(product => product.id === productId);

    if (selectedProduct) {
        const item = {
            id: selectedProduct.id,
            name: selectedProduct.name,
            price: selectedProduct.price,
            quantity: quantity
        };

        cart.push(item);
        updateCart();
    }
}

function updateCart() {
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartList.appendChild(li);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
}

function checkout() {
    const salesTotal = parseFloat(cartTotal.textContent);
    totalSales.textContent = (parseFloat(totalSales.textContent) + salesTotal).toFixed(2);

    // Clear the cart
    cart = [];
    updateCart();
}
