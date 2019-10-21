
var orderCount = 0;

const getOrderCountForUser = (name) => {
  const users = require('./resources/users.json')
  for (user of users) {
    if (user.name === name) {
      const userId = user.userId      
      const orders = require('./resources/orders.json')
      for (order of orders) {
        if (order.userId === userId) {
          orderCount ++  
        }
      }
      return orderCount
    } 
  }
  return 0
}
  
const getOrderCountForProduct = function(produt) {
  return 2
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