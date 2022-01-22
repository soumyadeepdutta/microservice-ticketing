import request from 'supertest';
import { app } from '../../app';

it('responds details of current user', async () => {
  const authResponse = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'asdf',
    })
    .expect(201);
  const authCookie = authResponse.get('Set-Cookie');

  const response = await request(app)
    .get('/api/users/currentuser')
    .set('Cookie', authCookie)
    .expect(200);

  expect(response.body.currentUser.email).toEqual('test@test.com');
});
