const app = require('../../src/app');

describe('\'reservations\' service', () => {
  it('registered the service', () => {
    const service = app.service('reservations');
    expect(service).toBeTruthy();
  });
});
