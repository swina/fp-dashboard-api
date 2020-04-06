

const streamingStatus = require('../../hooks/streaming.status');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [streamingStatus()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [streamingStatus()],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
