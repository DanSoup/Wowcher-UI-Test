

const getOrderCountForUser = (nameToFind) => {

  const userList = require('./resources/users.json');

  const foundUser = userList.find(user => user.name === nameToFind);

  if (!foundUser) return 0;

  const orderList = require('./resources/orders.json');

  const numberOfUserOrders = orderList.filter(order => order.userId === foundUser.userId).length;

  return numberOfUserOrders;

}
  
const getOrderCountForProduct = function(productNameToFind) {
  const productList = require('./resources/products.json');
  const productToFind = productList.find(product => product.productName === productNameToFind);
  
  if (!productToFind) return 0; 
  
  const orderList = require('./resources/orders.json');
  const productOrderCount = orderList.filter(order => order.productId === productToFind.productId).length;

  return productOrderCount;

} 
  
function getCustomerNamesForProduct(productNameToFind) {

  const productList = require('./resources/products.json');
  const productToFind = productList.find(product => product.productName === productNameToFind);
  
  if (!productToFind) return [];
  
  const orderList = require('./resources/orders.json');
  const matchingOrders = orderList.filter(order => order.productId === productToFind.productId);

  const foundCustomers = {};

  const userList = require('./resources/users.json');

  matchingOrders.forEach(order => {
    const user = userList.find(user => user.userId === order.userId);
    const userName = user.name;
    foundCustomers[userName] = true;
  });

  return Object.keys(foundCustomers).sort();
} 
  
const getMostPopularProduct = () => {

  const orderList = require('./resources/orders.json');

  const orderCounts = orderList.reduce((acc, order) => {
    const {productId} = order;
    if (acc[productId]) acc[productId]++;
    else acc[productId] = 1;
    return acc;
  }, {});

  const sortedOrderCounts = Object.entries(orderCounts).sort((a, b) => b[1] - a[1])

  const maxOrders = sortedOrderCounts[0][1];

  const productList = require('./resources/products.json');

  const mostOrderedProducts = sortedOrderCounts.reduce((acc, product) => {
    const [productId, orderAmount] = product;
    if (orderAmount === maxOrders) {
      const {productName} = productList.find(product => product.productId == productId);
      return [...acc, productName];
    }
    else return acc;
  }, []);

  return mostOrderedProducts;
}
  
module.exports = {
  getOrderCountForUser,
  getOrderCountForProduct,
  getCustomerNamesForProduct,
  getMostPopularProduct
}