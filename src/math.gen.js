"use strict";
/* TypeScript file generated from math.res by genType. */
/* eslint-disable import/first */
exports.__esModule = true;
exports.add = exports.addTypeChecked = void 0;
var math_1 = require("./math");
// In case of type error, check the type of 'add' in 'math.re' and './math'.
exports.addTypeChecked = math_1.add;
// Export 'add' early to allow circular import from the '.bs.js' file.
exports.add = exports.addTypeChecked;
