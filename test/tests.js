"use strict";

var request = require('supertest');
var app = require('../app.js');
var server = request.agent(app);


describe("log-in, then log-out", function () {

  it("displays the login page", function(done) {
    server
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
    server
      .post('/send-login')
      .send({username: 'testuser', password: 'pass'})
      .redirects(1)
      .expect(200)
      .expect(/Dashboard/)
      .end(function(err, res){
        if (err) { throw err; }
        done();
      });
  });

  it('shows that the user is logged in', function (done) {
    server
      .get('/dashboard')
      .expect(200)
      .expect(/testuser/)
      .end(function(err, res){
        if (err) { throw err; }
        done();
      });
  });

  it('correctly logs out', function (done) {
    server
      .get('/logout')
      .redirects(1)
      .expect(200)
      .expect(/login/)
      .end(function(err, res){
        if (err) { throw err; }
        done();
      });
  });
});
