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

describe('Shipping tests', () => {
  after(async () => {
    await dbConnect.drop();
  });

  before(async () => {
    await dbConnect.sync();
    await seedDb(dbConnect);
  });

  it('should get list of shipping region successfully', done => {
    chai
      .request(server)
      .get('/shipping/regions')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body[1].shipping_region_id).to.equal(2);
        expect(res.body[1].shipping_region).to.equal('US / Canada');
        expect(res.body.length).to.equal(4);
        done();
      });
  });
});
