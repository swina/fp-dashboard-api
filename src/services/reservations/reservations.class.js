const { Service } = require('feathers-knex');

exports.Reservations = class Reservations extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'reservations'
    });
  }
};
