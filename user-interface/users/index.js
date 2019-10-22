const API_URL = 'http://127.0.0.1:3007';

const body = document.getElementsByTagName('body')[0];
const table = document.getElementsByTagName('tbody')[0];
const tableHeader = document.getElementsByTagName('thead')[0].firstElementChild;

const activityLog = document.getElementById('activity-log');

const getOrderCountsButton = document.getElementById('order-counts-button');

const users = [];

const handleGetOrderCounts = () => {

  getOrderCountsButton.onclick = () => {};

  activityLog.innerText = 'Fetching order counts...'
  
  const orderCountHeader = document.createElement('th');
  orderCountHeader.innerText = 'Order Count';
  tableHeader.appendChild(orderCountHeader);

  const orderCountPromises = users.map(user => {
    
    return fetch(`${API_URL}/orders/user/${user.name}`)
    .then(res => {
      return res.json();
    })
    .then(res => {
      const userRow = document.getElementById('user-' + user.userId);
      const newCell = document.createElement('td')
      newCell.innerText = res.ordersByCustomer;
      userRow.appendChild(newCell);
    })
    .catch(err => {
      console.log(err)
    })

  });

  Promise.all(orderCountPromises)
  .then(() => {
    activityLog.innerText = 'Order counts fetched';
    getOrderCountsButton.innerText = 'Order counts fetched';
  })
  .catch(err => {
    activityLog.innerText = 'Error fetching order counts.';
    console.log(err);
  })

}

const fetchUserList = () => {

  activityLog.innerText = 'Fetching user list...';

  fetch(`${API_URL}/users`)
  .then(res => {
    return res.json();
  })
  .then(res => {

    users.push(...res.results);

    res.results.forEach(user => {

      const newRow = document.createElement('tr');

      const {userId} = user;

      newRow.id = 'user-' + userId;

      ['userId', 'name', 'age', 'email'].forEach(field => {
        const idCell = document.createElement('td');
        idCell.innerText = user[field];
        newRow.appendChild(idCell);
      })

      table.appendChild(newRow);

    });

    activityLog.innerText = 'User list fetched.';

  })
  .catch(err => {
    activityLog.innerText = 'Error fetching user list.';
    console.log('ERROR');
    console.log(err);
  })

}

fetchUserList();

getOrderCountsButton.onclick = handleGetOrderCounts;
