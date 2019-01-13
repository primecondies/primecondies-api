const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");
const app = require("../../../src/app");

describe("GET /place", () => {
  it("should return a single place", (done) => {
    request(app)
      .get("/place?location=Test+Location")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(err).to.equals(null);
        expect(res.body).to.have.property("location");
        expect(res.body).to.have.property("currently");
        expect(res.body).to.have.property("hourly");
        done();
      });
  });

  it("should return a 404 status code with invalid queries", (done) => {
    request(app)
      .get("/place?location=INVALID")
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(err).to.equal(null);
        done();
      });
  });

  it("should return a 404 status code if no queries provided", (done) => {
    request(app)
      .get("/place")
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(err).to.equal(null);
        done();
      });
  });
});