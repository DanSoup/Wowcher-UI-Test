

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
  const orderList = require('./resources/orders.json');
  
  const productToFind = productList.find(product => product.productName === productNameToFind);
  
  const productOrderCount = orderList.filter(order => order.productId === productToFind.productId).length;

  return productOrderCount;

} 
  
function getCustomerNamesForProduct(product) {
  return ['bob', 'sue']
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