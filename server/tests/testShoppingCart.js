import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

import server from '../../app';
import dbConnect from '../db/config';
import seedDb from '../seeders/seedDb';
import { addCartData } from './mockData';

dotenv.config();

const should = chai.should();
const { expect } = chai;

chai.use(chaiHttp);

describe('Shoppingcart tests', () => {
  after(async () => {
    await dbConnect.drop();
  });

  before(async () => {
    await dbConnect.sync();
    await seedDb(dbConnect);
  });

  it('should should generate unique cart Id successfully', done => {
    chai
      .request(server)
      .get('/shoppingcart/generateUniqueId')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.cart_id).not.empty.to.equal(true);
        done();
      });
  });

  it('should add product in cart', done => {
    chai
      .request(server)
      .post('/shoppingcart/add')
      .send(addCartData)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body[0].product_id).to.equal(addCartData.product_id);
        expect(res.body[0].attributes).to.equal(addCartData.attributes);
        done();
      });
  });

  it('should get product in cart', done => {
    chai
      .request(server)
      .get(`/shoppingcart/${addCartData.cart_id}`)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body[0].item_id).to.equal(1);
        expect(res.body[0].attributes).to.equal(addCartData.attributes);
        done();
      });
  });

  it('should update product in cart', done => {
    chai
      .request(server)
      .put(`/shoppingcart/update/1`)
      .send({
        quantity: 2
      })
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body[0].item_id).to.equal(1);
        expect(res.body[0].quantity).to.equal(2);
        done();
      });
  });

  it('should save product in cart for later', done => {
    chai
      .request(server)
      .get(`/shoppingcart/saveForLater/1`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('should get product in cart saved for later', done => {
    chai
      .request(server)
      .get(`/shoppingcart/getSaved/${addCartData.cart_id}`)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body[0].item_id).to.equal(1);
        expect(res.body[0].attributes).to.equal(addCartData.attributes);
        done();
      });
  });

  it('should moveToCart product saved for later', done => {
    chai
      .request(server)
      .get(`/shoppingcart/moveToCart/1`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('should get total amount in cart', done => {
    chai
      .request(server)
      .get(`/shoppingcart/totalAmount/${addCartData.cart_id}`)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.total_amount).to.equal(29.98);
        done();
      });
  });
});
