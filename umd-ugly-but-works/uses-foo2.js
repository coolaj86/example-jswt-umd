"use strict";

let Foo2 = require("./foo2.js");

// this should give an error (otherwise Greet2 became global)
/** @type {Greet2} */
let greet2f;
console.log(greet2f);

/** @type {import('./foo2').Greet2} */
let greet2;
greet2 = Foo2.greet;
greet2("AJ");
