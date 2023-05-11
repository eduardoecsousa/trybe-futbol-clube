import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User.model';
import { mockLogin, mockReturnFind } from './mocks/Login.mock';

import { Response } from 'superagent';
  
chai.use(chaiHttp);

const { expect } = chai;

describe('Verifica Login', () => {
  it('verifcia se no endPoint Login retorna um token'), async () =>{
    sinon.stub(User, 'findOne').resolves(mockReturnFind as User)

    const response = await chai.request(app)
      .post('/login')
      .send(mockLogin);

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal({ token: 'as'});
  }
});
