"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.helloWorld = void 0;

const log_1 = require("../subDirectory2/log");

const helloWorld = () => {
  log_1.log("Hell World");
};

exports.helloWorld = helloWorld;