"use strict";

let Foo = require("./foo.js");

// this should give an error (otherwise Foo became global)
// (and indeed the export became global)
/** @type {Foo} */
let fooFail = null;
console.log(fooFail);

// This should NOT have an error (but it does)
//   - Foo should be module-exported,
//   - Foo.greet should automatically typed by its explicit definition
/** @type {import('./foo').Foo} */
let greet = Foo.greet;
greet("AJ");
