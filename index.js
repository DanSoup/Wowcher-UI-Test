const express = require('express')
const app = express()
const service = require('./service')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {res.send('Status: OK')})

app.get('/users', (req, res) => {
  const results = require('./resources/users.json')
  const userCount = results.length
  const payload = {results, 'userCount': userCount}
  res.send(payload)
})

app.get('/orders/user/:name', (req, res) => {
  const userName = req.params.name
  const orderAmount = service.getOrderCountForUser(userName);
  res.send({'ordersByCustomer': orderAmount});
})

app.get('/orders/product/:product', (req, res) => {
  const productName = req.params.product
  const orderAmount = service.getOrderCountForProduct(productName);
  res.send({'numberOfOrders': orderAmount});
})

app.get('/users/product/:product', (req, res) => {
  const productName = req.params.product
  const customers = service.getCustomerNamesForProduct(productName);
  res.send({customers});
})

app.get('/products/popular', (req, res) => {
  const mostPopularProducts = service.getMostPopularProduct();
  res.send({mostPopularProducts});
})

app.listen(3007, () => console.log('Listening on port 3007'))