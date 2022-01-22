import request from 'supertest';
import { app } from '../../app';

it('responds details of current user', async () => {
  const authCookie = await global.signin();

  const response = await request(app)
    .get('/api/users/currentuser')
    .set('Cookie', authCookie)
    .expect(200);

  expect(response.body.currentUser.email).toEqual('test@test.com');
});

it('responds with null if not authenticated', async () => {
  const response = await request(app).get('/api/users/currentuser').expect(200);
  expect(response.body.currentUser).toEqual(null);
});
