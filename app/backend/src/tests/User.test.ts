import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User.model';
import { mockLogin, mockReturnFind, mockLoginEmailIncorect, mockLoginPassworfIncorect, mockLoginIsInvalid } from './mocks/Login.mock';

import { Response } from 'superagent';
  
chai.use(chaiHttp);

const { expect } = chai;

describe('Verifica Login', () => {
  afterEach(() => {
    sinon.restore();
  })
  it('verifcia se no endPoint Login retorna um token', async () => {
    sinon.stub(User, 'findOne').resolves(mockReturnFind as User)

    const response = await chai.request(app)
      .post('/login')
      .send(mockLogin);

    expect(response.status).to.be.equal(200);
    expect(response.body.token).to.be.a('string');
  }) 
  it('verifcia se nao colocar "email" na requisição retorna um erro', async () => {

    const response = await chai.request(app)
      .post('/login')
      .send({password: '21342'});

    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ message: 'All fields must be filled'});
  })
  it('verifcia se nao colocar "password" na requisição retorna um erro', async () => {

    const response = await chai.request(app)
      .post('/login')
      .send({email: 'mas@fma.com'});

    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ message: 'All fields must be filled'});
  })
  it('verifcia se ao colocar um email invalido, retorna um erro', async () => {

    const response = await chai.request(app)
      .post('/login')
      .send(mockLoginEmailIncorect);

    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Invalid email or password'});
  });
  it('verifcia se ao colocar uma senha com menos de 6 caracteres, retorna um erro', async () => {

    const response = await chai.request(app)
      .post('/login')
      .send(mockLoginPassworfIncorect);

    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Invalid email or password'}); 
  })
  it('Verifica caso o usuario seja inexistente', async () => {
    sinon.stub(User, 'findOne').resolves()

    const response = await chai.request(app)
      .post('/login')
      .send(mockLogin);

    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Invalid email or password'}); 
  }) 
  it('Verifica caso a senha esteja inconrreta', async () => {
    sinon.stub(User, 'findOne').resolves(mockReturnFind as User)

    const response = await chai.request(app)
      .post('/login')
      .send(mockLoginIsInvalid);

    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Invalid email or password'}); 
  }) 
});
