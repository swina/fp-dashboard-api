// Initializes the `streaming` service on path `/streaming`
const { Streaming } = require('./streaming.class');
const createModel = require('../../models/streaming.model');
const hooks = require('./streaming.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/streaming', new Streaming(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('streaming');

  service.hooks(hooks);
};
