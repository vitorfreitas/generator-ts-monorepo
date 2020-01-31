"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");
const rimraf = require("rimraf");

describe("generator-ts-monorepo:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ name: "monorepo" });
  });

  afterAll(() => {
    rimraf.sync(path.join(__dirname, "tmp"));
  });

  it("should create the monorepo", () => {
    assert.file(["../monorepo"]);
  });
});
