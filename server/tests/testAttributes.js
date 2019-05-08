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

describe('Attribute tests', () => {
  after(async () => {
    await dbConnect.drop();
  });

  before(async () => {
    await dbConnect.sync();
    await seedDb(dbConnect);
  });

  it('should get list of attributes successfully', done => {
    chai
      .request(server)
      .get('/attributes')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body[0].attribute_id).to.equal(1);
        expect(res.body[0].name).to.equal('Size');
        expect(res.body.length).to.equal(2);
        done();
      });
  });

  it('should get a single attribute successfully', done => {
    chai
      .request(server)
      .get('/attributes/1')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.attribute_id).to.equal(1);
        expect(res.body.name).to.equal('Size');
        done();
      });
  });

  it('should get list of attribute values successfully', done => {
    chai
      .request(server)
      .get('/attributes/values/1')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body[0].attribute_value_id).to.equal(1);
        expect(res.body[0].value).to.equal('S');
        expect(res.body.length).to.equal(5);
        done();
      });
  });

  it('should get list of attribute in product successfully', done => {
    chai
      .request(server)
      .get('/attributes/inProduct/1')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body[0].attribute_value_id).to.equal(1);
        expect(res.body[0].attribute_value).to.equal('S');
        expect(res.body.length).to.equal(9);
        done();
      });
  });
});
