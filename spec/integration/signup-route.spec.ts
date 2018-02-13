process.env.NODE_ENV = "test";

import * as supertest from "supertest";
import * as server from "../../src/server";
import * as dbHelpers from "../helpers/db.helper";
const tellJasmineDone = require("jasmine-supertest");
import {} from "jasmine";

describe("Sign Up Route", () => {

  afterAll( () => {
    dbHelpers.dropDB();
  });

  it("should create a user and return 201 ok", (done) => {
    const signup = { email: "user@test.com", password: "password2" };

    supertest(server).post("/api/users")
                     .send(signup)
                     .expect(201)
                     .expect( (res: any) => {
                       const data = res.body;
                       if (data.email !== signup.email && data.message !== "ok") {
                         throw new Error("New user not created");
                       }
                     })
                     .end(tellJasmineDone(done));

  });

});