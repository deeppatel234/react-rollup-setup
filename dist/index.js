"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AlphaComp = require("./AlphaComp");

Object.keys(_AlphaComp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AlphaComp[key];
    }
  });
});

var _BetaComp = require("./BetaComp");

Object.keys(_BetaComp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _BetaComp[key];
    }
  });
});