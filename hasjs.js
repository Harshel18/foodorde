// Array to store the cart items
let cartItems = [];

// Function to add an item to the cart
function addToCart(item) {
  cartItems.push(item);
  updateCart();
}

// Function to update the cart view
function updateCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    cartList.appendChild(li);
  });
}

// Function to handle checkout
function checkout() {
  if (cartItems.length > 0 && validateCustomerInfo()) {
    displayOrderSummary();
    sendOrderEmail();
    clearCheckout();
  } else {
    alert('Please provide valid customer information.');
  }
}

// Function to display the order summary
function displayOrderSummary() {
  const orderSummaryList = document.getElementById('order-summary-items');
  orderSummaryList.innerHTML = '';
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    orderSummaryList.appendChild(li);
  });
}

// Function to send the order details via email
function sendOrderEmail() {
  const name = document.getElementById('name').value.trim();
  const phoneNumber = document.getElementById('phone-number').value.trim();
  const address = document.getElementById('address').value.trim();
  const items = cartItems.join('\n');

  // Replace 'your-email@example.com' with your own email address
  const emailAddress = 'Harshel333@gmail.com';

  const subject = 'New Order';
  const body = `Name: ${name}\nPhone Number: ${phoneNumber}\nAddress: ${address}\n\nOrder Items:\n${items}`;

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open the default email client with the pre-populated email
  window.location.href = mailtoLink;
}

// Function to clear the checkout box
function clearCheckout() {
  cartItems = [];
  updateCart();
  clearCustomerInfo();
  clearOrderSummary();
}

// Function to validate customer information
function validateCustomerInfo() {
  const name = document.getElementById('name').value.trim();
  const phoneNumber = document.getElementById('phone-number').value.trim();
  const address = document.getElementById('address').value.trim();

  if (name === '' || phoneNumber === '' || address === '') {
    return false;
  }

  return true;
}

// Function to clear the customer information
function clearCustomerInfo() {
  document.getElementById('name').value = '';
  document.getElementById('phone-number').value = '';
  document.getElementById('address').value = '';
}

// Function to clear the order summary
function clearOrderSummary() {
  const orderSummaryList = document.getElementById('order-summary-items');
  orderSummaryList.innerHTML = '';
}
