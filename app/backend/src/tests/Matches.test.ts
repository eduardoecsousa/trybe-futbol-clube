import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matche, { MatchObj } from '../database/models/Matche.model';

import { Response } from 'superagent';
import {
  MockReturnFindMatches,
  MockReturnFindMatchesFalse,
  MockReturnFindMatchestrue,
  objPatchMatchesGols,
  objPostMatches,
  objPostMatchesTeamEqual,
  mockSuccessCreate
} from './mocks/Matches.mock';
import mockFindAll from './mocks/Temas.mock'
import Team from '../database/models/Team.model';

chai.use(chaiHttp);

const { expect } = chai;

let token: string;

describe('Verifica rotas Matches', () => {
  beforeEach(async () => {
    const login = {email: 'admin@admin.com', password: 'secret_admin'}
    const response = await chai.request(app)
      .post('/login').send(login);
    token = response.body.token;
  })
  afterEach(() => {
    sinon.restore();
  })
  describe('Verifica requesições GET de Matches', () => {
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
  });

  describe('Verifica as Requisições PATCH de /matches/id/finish', () => {
    it('Verifica se ao fazer a requisição sem o token, retorna um erro', async () => {

      const response = await chai.request(app)
        .patch('/matches/1/finish');
      
      expect(response.status).to.be.equal(401);
      expect(response.body.message).to.be.equal('Token not found');
    });
    it('Verifica se ao fazer a requisição com o token invalido, retorna um erro', async () => {

      const response = await chai.request(app)
        .patch('/matches/1/finish').set('Authorization', 'asaldijsa');
      
      expect(response.status).to.be.equal(401);
      expect(response.body.message).to.be.equal('Token must be a valid token');
    });
    it('Verifica se ao fazer a requisição com o token valido retorna a messagem de "finished"', async () => {
      sinon.stub(Matche, 'update').resolves([1])
      const response = await chai.request(app)
        .patch('/matches/1/finish')
        .set('Authorization', token);
      
      expect(response.status).to.be.equal(200);
      expect(response.body.message).to.be.equal('Finished');
    })
  })

  describe('Verifica as Requisições PATCH de /matches/id', () => {
    it('Verifica se ao fazer a requisição sem o token, retorna um erro', async () => {

      const response = await chai.request(app)
        .patch('/matches/1').send(objPatchMatchesGols);
      
      expect(response.status).to.be.equal(401);
      expect(response.body.message).to.be.equal('Token not found');
    });
    it('Verifica se ao fazer a requisição com o token invalido, retorna um erro', async () => {

      const response = await chai.request(app)
        .patch('/matches/1').send(objPatchMatchesGols)
        .set('Authorization', 'asaldijsa');
      
      expect(response.status).to.be.equal(401);
      expect(response.body.message).to.be.equal('Token must be a valid token');
    });
    it('Verifica se ao fazer a requisição com o token valido e os parametros, "success"', async () => {
      sinon.stub(Matche, 'update').resolves([1])
      const response = await chai.request(app)
        .patch('/matches/1').send(objPatchMatchesGols)
        .set('Authorization', token);
      
      expect(response.status).to.be.equal(200);
      expect(response.body.message).to.be.equal('Success');
    });
  });
  
  describe('Verfica a requisição POST de /matches', () => {
    afterEach(() => {
      sinon.restore();
    })
    it('Verifica se ao fazer a requisição sem o token, retorna um erro', async () => {

      const response = await chai.request(app)
        .post('/matches/').send(objPostMatches);
      
      expect(response.status).to.be.equal(401);
      expect(response.body.message).to.be.equal('Token not found');
    });
    it('Verifica se ao fazer a requisição com o token invalido, retorna um erro', async () => {

      const response = await chai.request(app)
        .post('/matches').send(objPostMatches)
        .set('Authorization', 'asaldijsa');
      
      expect(response.status).to.be.equal(401);
      expect(response.body.message).to.be.equal('Token must be a valid token');
    });
    it('Verifica se ao tentar criar uma partida com o dois times iguais retorna um erro', async () => {

      const response = await chai.request(app)
        .post('/matches').send(objPostMatchesTeamEqual)
        .set('Authorization', token);
      
      expect(response.status).to.be.equal(422);
      expect(response.body.message).to.be.equal('It is not possible to create a match with two equal teams');
    });
    it('Verifica se ao tentar criar uma partida com um time que nao exites na tabela retorna um erro', async () => {
      sinon.stub(Team, 'findOne').resolves()
      const response = await chai.request(app)
        .post('/matches').send(objPostMatches)
        .set('Authorization', token);
      
      expect(response.status).to.be.equal(404);
      expect(response.body.message).to.be.equal('There is no team with such id!');
    });

    it('Verifica se ao tentar criar uma partida corretamente', async () => {
      sinon.stub(Team, 'findOne').resolves(mockFindAll[0] as Team)
      sinon.stub(Matche, 'create').resolves(mockSuccessCreate as Matche)
      const response = await chai.request(app)
        .post('/matches').send(objPostMatches)
        .set('Authorization', token);
      
      expect(response.status).to.be.equal(201);
      expect(response.body).to.be.deep.equal(mockSuccessCreate);
    });
  })
});