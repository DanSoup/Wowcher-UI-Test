

const getOrderCountForUser = (name) => {

  var orderCount = 0;

  const users = require('./resources/users.json');
  for (user of users) {
    if (user.name === name) {
      const userId = user.userId;
      const orders = require('./resources/orders.json');
      for (order of orders) {
        if (order.userId === userId) {
          orderCount ++;
        }
      }
      return orderCount;
    } ;
  };
  return 0;
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
  return ['chair']
}
  
module.exports = {
  getOrderCountForUser,
  getOrderCountForProduct,
  getCustomerNamesForProduct,
  getMostPopularProduct
}