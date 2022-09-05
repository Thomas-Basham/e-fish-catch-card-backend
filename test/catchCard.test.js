const assert = require('assert');
const expect = require('chai').expect
const request = require('supertest');
const app = require('../server')

describe('Unit testing the /home route', function() {

    it('should return OK status', function() {
      return request(app)
        .get('/')
        .then(function(response){
            assert.equal(response.status, 200)
        })
    });

    it('should return message on rendering', function() {
      return request(app)
        .get('/')
        .then(function(response){
            expect(response.text).to.contain('Welcome to the E-fish-catch-card server!');
        })
    });

});
