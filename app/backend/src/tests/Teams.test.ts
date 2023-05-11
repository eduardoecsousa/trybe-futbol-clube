import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/Team.model';
import mockFindAll from './mocks/Temas.mock';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Verifica rota Teams', () => {
  describe('Verifica GET /teams', () => {
    it('Verifica o caso a requisição de todos os times - findAll', async () => {
      sinon.stub(Team, 'findAll').resolves(mockFindAll as Team[])
      const response = await chai.request(app)
        .get('/teams');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(mockFindAll);
    });
    it('Verifica o caso da requisição de somente 1 time pelo id', async () => {
      sinon.stub(Team, 'findByPk').resolves(mockFindAll[0] as Team)
      const response = await chai.request(app)
        .get('/teams/1');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(mockFindAll[0]);
      
    });
  })
});
