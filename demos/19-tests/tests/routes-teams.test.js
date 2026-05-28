import { describe, expect, it } from "vitest";
import request from "supertest";
import app from '../../../exercices/corrections/5.3/app.mjs'
describe("Testing GET /teams", () => {
  it("Should have JSON content", () => {
    request(app).get("/teams").expect("Content-Type", /json/);
  });

  it("Should have status 200", () => {
    request(app).get("/teams").expect(200);
  });

  it("Should have an array of teams", () => {
    return request(app)
      .get("/teams")
      .then((response) => {
        expect(Array.isArray(response.body)).toBe(true);
      });
  });
});
