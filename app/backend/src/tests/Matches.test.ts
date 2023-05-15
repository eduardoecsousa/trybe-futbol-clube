import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matche from '../database/models/Matche.model';

import { Response } from 'superagent';
import {
  MockReturnFindMatches,
  MockReturnFindMatchesFalse,
  MockReturnFindMatchestrue,
} from './mocks/Matches.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Verifica rotas Matches', () => {
  describe('Verifica requesições GET de Matches', () => {
    afterEach(() => {
      sinon.restore();
    })
    it('Verifica se a requisição GET /matches retorna uma lista de partidas', async () => {
      sinon.stub(Matche, 'findAll').resolves(MockReturnFindMatches as [])

      const response = await chai.request(app)
        .get('/matches');
      
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(MockReturnFindMatches);
    })
    it('Verifica se ao fazer a requisição com "inProgress" TRUE, retorna somente partidas em andamento', async () => {
      sinon.stub(Matche, 'findAll').resolves(MockReturnFindMatchestrue as [])

      const response = await chai.request(app)
        .get('/matches?inProgress=true');
      
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(MockReturnFindMatchestrue);
    })
    it('Verifica se ao fazer a requisição com "inProgress" FALSE, retorna somente partidas em andamento', async () => {
      sinon.stub(Matche, 'findAll').resolves(MockReturnFindMatchesFalse as [])

      const response = await chai.request(app)
        .get('/matches?inProgress=false');
      
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(MockReturnFindMatchesFalse);
    })
  })
});
