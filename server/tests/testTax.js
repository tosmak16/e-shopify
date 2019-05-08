import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

import server from '../../app';
import dbConnect from '../db/config';
import seedDb from '../seeders/seedDb';

dotenv.config();

const should = chai.should();
const { expect } = chai;

chai.use(chaiHttp);

describe('Tax tests', () => {
  after(async () => {
    await dbConnect.drop();
  });

  before(async () => {
    await dbConnect.sync();
    await seedDb(dbConnect);
  });

  it('should get list of tax successfully', done => {
    chai
      .request(server)
      .get('/tax')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body[0].tax_id).to.equal(1);
        expect(res.body.length).to.equal(2);
        done();
      });
  });

  it('should get a single tax successfully', done => {
    chai
      .request(server)
      .get('/tax/1')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.tax_id).to.equal(1);
        done();
      });
  });
});
