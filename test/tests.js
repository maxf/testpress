"use strict";

var request = require('supertest');
var app = require('../app.js');


describe("log-in, then log-out", function () {

  it("displays the login page", function(done) {
    request(app)
      .get('/login')
      .expect('Content-Type', /html/)
      .expect(200)
      .expect(/Login/)
      .end(function(err, res){
        if (err) { throw err; }
        done();
      });
  });

  it('lets the user log in', function (done) {
    request(app)
      .post('/send-login')
      .send({username: 'test', password: 'pass'})
      .expect(302)
      .expect('Location', '/dashboard')
      .end(function(err, res){
        if (err) { throw err; }
        done();
      });
  });

});
