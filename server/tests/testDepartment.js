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

describe('Department tests', () => {
  after(async () => {
    await dbConnect.drop();
  });

  before(async () => {
    await dbConnect.sync();
    await seedDb(dbConnect);
  });

  it('should get list of departments successfully', done => {
    chai
      .request(server)
      .get('/departments')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body[0].department_id).to.equal(1);
        expect(res.body[0].name).to.equal('Regional');
        done();
      });
  });

  it('should get a single departments successfully', done => {
    chai
      .request(server)
      .get('/departments/1')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.department_id).to.equal(1);
        expect(res.body.name).to.equal('Regional');
        done();
      });
  });
});
