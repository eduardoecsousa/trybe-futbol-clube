import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matche from '../database/models/Matche.model';

import { Response } from 'superagent';
import MockReturnFindMatches from './mocks/Matches.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Verifica rotas Matches', () => {
  describe('Verifica requesições GET de Matches', () => {
    it('Verifica se a requisição GET /matches retorna uma lista de partidas', async () => {
      sinon.stub(Matche, 'findAll').resolves(MockReturnFindMatches as [])

      const response = await chai.request(app)
        .get('/matches');
      
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(MockReturnFindMatches);
    })
  })
});
