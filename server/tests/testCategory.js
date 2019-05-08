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

describe('Category tests', () => {
  after(async () => {
    await dbConnect.drop();
  });

  before(async () => {
    await dbConnect.sync();
    await seedDb(dbConnect);
  });

  it('should get list of categories successfully', done => {
    chai
      .request(server)
      .get('/categories')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body[0].category_id).to.equal(1);
        expect(res.body[0].name).to.equal('French');
        done();
      });
  });

  it('should get a single category successfully', done => {
    chai
      .request(server)
      .get('/categories/1')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.category_id).to.equal(1);
        expect(res.body.name).to.equal('French');
        done();
      });
  });

  it('should get categories in product successfully', done => {
    chai
      .request(server)
      .get('/categories/inProduct/1')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body[0].category_id).to.equal(1);
        expect(res.body[0].name).to.equal('French');
        done();
      });
  });

  it('should get categories in department successfully', done => {
    chai
      .request(server)
      .get('/categories/inDepartment/1')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body[0].category_id).to.equal(1);
        expect(res.body[0].name).to.equal('French');
        done();
      });
  });
});
