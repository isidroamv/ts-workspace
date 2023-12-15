"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = void 0;
var module_a_1 = require("@ts-workspace/module-a");
function multiply(a, b) {
    var c = 0;
    for (var i = 0; i < b; i++) {
        c = (0, module_a_1.add)({ a: a, b: c });
    }
    return c;
}
exports.multiply = multiply;
