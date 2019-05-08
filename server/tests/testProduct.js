import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

import server from '../../app';
import dbConnect from '../db/config';
import { user, token, productReview } from './mockData';
import seedDb from '../seeders/seedDb';

dotenv.config();

const should = chai.should();
const { expect } = chai;

chai.use(chaiHttp);

describe('Product tests', () => {
  after(async () => {
    await dbConnect.drop();
  });

  before(async () => {
    await dbConnect.sync();
    await seedDb(dbConnect);
  });

  it('should get list of products successfully', done => {
    chai
      .request(server)
      .get('/products')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.count).to.equal(1);
        expect(res.body.rows[0].name).to.equal("Arc d'Triomphe");
        done();
      });
  });

  it('should search for products by name when all_words is off', done => {
    chai
      .request(server)
      .get('/products/search?all_words=off&query_string=ARC')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.count).to.equal(1);
        expect(res.body.rows[0].name).to.equal("Arc d'Triomphe");
        done();
      });
  });

  it('should search for products by name when all_words is on', done => {
    chai
      .request(server)
      .get(`/products/search?all_words=on&query_string=Arc d'Triomphe`)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.count).to.equal(1);
        expect(res.body.rows[0].name).to.equal("Arc d'Triomphe");
        done();
      });
  });

  it('should get a single product by id', done => {
    chai
      .request(server)
      .get(`/products/1`)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.product_id).to.equal(1);
        expect(res.body.name).to.equal("Arc d'Triomphe");
        done();
      });
  });

  it('should not get a single product by id if product does not exist', done => {
    chai
      .request(server)
      .get(`/products/2`)
      .end((err, res) => {
        res.should.have.status(400);
        expect(res.body.error.message).to.equal('Product does not exist');
        done();
      });
  });

  it('should get products in category', done => {
    chai
      .request(server)
      .get(`/products/inCategory/1`)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.count).to.equal(1);
        expect(res.body.rows[0].name).to.equal("Arc d'Triomphe");
        done();
      });
  });

  it('should get products in department', done => {
    chai
      .request(server)
      .get(`/products/inDepartment/1`)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.count).to.equal(1);
        expect(res.body.rows[0].name).to.equal("Arc d'Triomphe");
        done();
      });
  });

  it('should get products details', done => {
    chai
      .request(server)
      .get(`/products/1/details`)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.product_id).to.equal(1);
        expect(res.body.name).to.equal("Arc d'Triomphe");
        done();
      });
  });

  it('should get products location', done => {
    chai
      .request(server)
      .get(`/products/1/locations`)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body[0].category_id).to.equal(1);
        expect(res.body[0].category_name).to.equal('French');
        done();
      });
  });

  it('should not get products reviews if no reviews', done => {
    chai
      .request(server)
      .get(`/products/1/reviews`)
      .end((err, res) => {
        res.should.have.status(400);
        expect(res.body.error.message).to.equal('Product reviews does not exist');
        done();
      });
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

  it('should add products reviews', done => {
    chai
      .request(server)
      .post(`/products/1/reviews`)
      .set({ 'USER-KEY': token })
      .send(productReview)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.rating).to.equal(productReview.rating);
        expect(res.body.review).to.equal(productReview.review);
        done();
      });
  });
});
