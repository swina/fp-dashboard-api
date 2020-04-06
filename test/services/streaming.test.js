const app = require('../../src/app');

describe('\'streaming\' service', () => {
  it('registered the service', () => {
    const service = app.service('streaming');
    expect(service).toBeTruthy();
  });
});
