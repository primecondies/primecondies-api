const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");
const app = require("../../../src/app");

describe("GET /places", () => {
  it("should return an array of places", (done) => {
    request(app)
      .get("/places")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(err).to.equal(null);
        expect(res.body).to.be.an("array");
        done();
      });
  });

  it("should return a 404 status code if passed any queries", (done) => {
    request(app)
      .get("/places?thing=invalid")
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(err).to.equal(null);
        done();
      });
  });
});