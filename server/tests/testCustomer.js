import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

import server from '../../app';
import dbConnect from '../db/config';
import { user, token } from './mockData';

dotenv.config();

const should = chai.should();
const { expect } = chai;

chai.use(chaiHttp);

describe('Customer tests', () => {
  after(async () => {
    await dbConnect.drop();
  });

  before(async () => {
    await dbConnect.sync();
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

  it('should not register user if email exist already', done => {
    chai
      .request(server)
      .post('/customers')
      .send(user)
      .end((err, res) => {
        res.should.have.status(400);
        expect(res.body.error.message).to.equal('The email already exists.');
        done();
      });
  });

  it('should login user if user exist', done => {
    chai
      .request(server)
      .post('/customers/login')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.customer.email).to.equal(user.email);
        done();
      });
  });

  it('should not register user if email exist already', done => {
    const wrongUser = { ...user };
    wrongUser.password = 'aa';
    chai
      .request(server)
      .post('/customers/login')
      .send(wrongUser)
      .end((err, res) => {
        res.should.have.status(400);
        expect(res.body.error.message).to.equal(`Email or Password is invalid.`);
        done();
      });
  });

  it('should get user details if token is valid', done => {
    chai
      .request(server)
      .get('/customer')
      .set({ 'USER-KEY': token })
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.email).to.equal(user.email);
        done();
      });
  });

  it('should not get user details if token is invalid', done => {
    chai
      .request(server)
      .get('/customer')
      .set({ 'USER-KEY': 'fake token' })
      .end((err, res) => {
        res.should.have.status(401);
        expect(res.body.error.message).to.equal('jwt malformed');
        done();
      });
  });

  it('should not get user details if token is not set', done => {
    chai
      .request(server)
      .get('/customer')
      .end((err, res) => {
        res.should.have.status(401);
        expect(res.body.error.message).to.equal('Authorization token not provided.');
        done();
      });
  });

  it('should update user details', done => {
    chai
      .request(server)
      .put('/customer')
      .set({ 'USER-KEY': token })
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.email).to.equal(user.email);
        done();
      });
  });
});
