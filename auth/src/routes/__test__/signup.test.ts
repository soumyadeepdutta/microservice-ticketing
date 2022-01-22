import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on succesfull signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'abc@test.com',
      password: 'asdf',
    })
    .expect(201);
});

it('returns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'abc.com',
      password: 'asdf',
    })
    .expect(400);
});

it('returns a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'abc.com',
      password: 'as',
    })
    .expect(400);
});

it('returns a 400 with missing email and password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@t.com',
    })
    .expect(400);
  await request(app)
    .post('/api/users/signup')
    .send({
      password: 'test12',
    })
    .expect(400);
});

it('disallows duplicate email', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@t.com',
      password: 'asdf',
    })
    .expect(201);
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@t.com',
      password: 'asdf',
    })
    .expect(400);
});

it('sets a cookie after successful signup', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@t.com',
      password: 'asdf',
    })
    .expect(201);

  expect(response.get('Set-Cookie')).toBeDefined();
});
