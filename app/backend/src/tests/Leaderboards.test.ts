import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matche from '../database/models/Matche.model';
import { mockResultHome, mockResultAway, mockResultAll } from './mocks/Leaderboards.mock';

import { Response } from 'superagent';
import { leaderboardsType } from '../database/services/utils/functions';

chai.use(chaiHttp);

const { expect } = chai;

describe('Verifica rota Learderboards', () => {
  afterEach(() => {
    sinon.restore();
  })
  describe('Verifica GET /leaderboards', () => {
    it('Verifica o caso a requisição no endpoint /leaderboards/home', async () => {
      sinon.stub(Matche, 'findAll').resolves(mockResultHome as [])
      const response = await chai.request(app)
        .get('/leaderboard/home');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(mockResultHome);
    });
    it('Verifica o caso a requisição no endpoint /leaderboards/away', async () => {
      sinon.stub(Matche, 'findAll').resolves(mockResultAway as [])
      const response = await chai.request(app)
        .get('/leaderboard/away');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(mockResultAway);
    });
    it('Verifica o caso a requisição no endpoint /leaderboards', async () => {
      sinon.stub(Matche, 'findAll').resolves(mockResultHome as [])
        .onSecondCall().resolves(mockResultAway as [])
      const response = await chai.request(app)
        .get('/leaderboard');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(mockResultAll);
    });
  })
});
