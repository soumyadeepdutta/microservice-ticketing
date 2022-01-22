import request from 'supertest';
import { app } from '../../app';

it('fails when a email does not exists is supplied', async () => {
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'asdf',
    })
    .expect(400);
});

it('fails when a email when incorrent password is supplied', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'asdf',
    })
    .expect(201);

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'asdf1',
    })
    .expect(400);
});

it('respond with a cookie when valid credentials are supplied', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'asdf',
    })
    .expect(201);

  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'asdf',
    })
    .expect(200);

  expect(response.get('Set-Cookie')).toBeDefined();
});
