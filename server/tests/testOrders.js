import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

import server from '../../app';
import dbConnect from '../db/config';
import seedDb from '../seeders/seedDb';
import { orderData, token, user, addCartData } from './mockData';

dotenv.config();

const should = chai.should();
const { expect } = chai;

chai.use(chaiHttp);

describe('Orders tests', () => {
  after(async () => {
    await dbConnect.drop();
  });

  before(async () => {
    await dbConnect.sync();
    await seedDb(dbConnect);
  });

  it('should register user if email does not exist already', done => {
    chai
      .request(server)
      .post('/customers')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.customer.name).to.equal(user.name);
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

  it('should create a new order successfully', done => {
    chai
      .request(server)
      .post('/orders')
      .set('USER-KEY', token)
      .send(orderData)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.order_id).to.equal(1);
        done();
      });
  });

  it('should get order details successfully', done => {
    chai
      .request(server)
      .get('/orders/shortDetail/1')
      .set('USER-KEY', token)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body[0].order_id).to.equal(1);
        done();
      });
  });
});
