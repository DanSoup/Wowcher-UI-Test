const API_URL = 'http://127.0.0.1:3007';

const body = document.getElementsByTagName('body')[0];
const table = document.getElementsByTagName('tbody')[0];
const productNameInput = document.getElementsByTagName('input')[0];
const getProductInformationButton = document.getElementsByTagName('button')[0];
const propductInformationSection = document.getElementsByTagName('section')[0];

const activityLog = document.getElementById('activity-log');

let productName = productNameInput.value;

productNameInput.oninput = e => {
  productName = e.target.value;
  productNameInput.value = productName;
}

const getProductInformation = async () => {

  getProductInformationButton.innerText = 'Fetching Product Information...'

  document.getElementById('popular').className = 'hidden';
  propductInformationSection.className = '';

  document.getElementById('product-name').innerText = productName

  const numberOfOrders = await fetch(`${API_URL}/orders/product/${productName}`)
  .then(res => res.json())
  .then(res => {
    return res.numberOfOrders;
  })

  const orderedBy = await fetch(`${API_URL}/users/product/${productName}`)
  .then(res => res.json())
  .then(res => {
    return res.customers
  })

  const mostPopularProducts = await fetch(`${API_URL}/products/popular`)
  .then(res => res.json())
  .then(res => {
    return res.mostPopularProducts;
  })

  if (mostPopularProducts.includes(productName)) {
    document.getElementById('popular').className = '';
  }

  document.getElementById('order-amount').innerText = `Order amount: ${numberOfOrders}`
  document.getElementById('ordered-by').innerText = `Ordered by: ${orderedBy.join(', ')}`

  getProductInformationButton.innerText = 'Get Product Information';

};

getProductInformationButton.onclick = getProductInformation;