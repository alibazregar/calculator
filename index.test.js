const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should respond with status code 200 and the index.html file', async () => {
    const response = await request(app).get('/');
    
    expect(response.status).toBe(200);
  });
});
describe('GET /', () => {
    it('should send the correct content type header', async () => {
      const response = await request(app).get('/');
      
      expect(response.headers['content-type']).toContain('text/html');
    });
  });
  describe('GET /', () => {
    it('should send the index.html file from the correct directory', async () => {
      const response = await request(app).get('/');
      
      expect(response.text).toContain('<html>');
      expect(response.text).toContain('</html>');
    });
  });