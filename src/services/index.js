const users = require('./users/users.service.js');
const reservations = require('./reservations/reservations.service.js');
const products = require('./products/products.service.js');
const settings = require('./settings/settings.service.js');
const streaming = require('./streaming/streaming.service.js');
const orders = require('./orders/orders.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(reservations);
  app.configure(products);
  app.configure(settings);
  app.configure(streaming);
  app.configure(orders);
};
