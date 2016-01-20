var chai = require('chai');
var chaiHttp = require('chai-http');
var assert = require('assert');
var should = chai.should();
var server = require('../app');
chai.use(chaiHttp);


describe('Posts', function() {
  it('should list ALL posts on /posts GET', function (done) {
    chai.request(server)
    .get('/posts')
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
  });
});
