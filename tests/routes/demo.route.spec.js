const app = require('../../app');
const request = require('supertest');

describe('User Endpoint', () => {
  it('GET /user', async () => {
    const response = await request(app).get('/user');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      message: 'user path live 🚀',
      data: null
    });
  });
});
