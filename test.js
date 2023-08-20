"use strict";

require("mocha");
const assert = require("assert");
const emailDesigner = require("./");

describe("createHTML ", function () {
  it("should returns string:", function () {
    assert(typeof emailDesigner.createHTML() === "string");
  });
});
