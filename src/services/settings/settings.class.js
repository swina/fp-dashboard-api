const { Service } = require('feathers-knex');

exports.Settings = class Settings extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'settings'
    });
  }
};
