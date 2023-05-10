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
    it('Verifica o caso a requisição seja sucesso', async () => {
      sinon.stub(Team, 'findAll').resolves(mockFindAll as Team[])
      const response = await chai.request(app)
        .get('/teams');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(mockFindAll);
    })
  })
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });
});
