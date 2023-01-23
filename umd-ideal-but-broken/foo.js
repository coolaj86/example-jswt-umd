var Foo = ("object" === typeof module && exports) || {};
(function (window) {
  "use strict";

  let Crypto = window.crypto || require("node:crypto");

  Foo.secret = new Uint8Array(16);
  Crypto.getRandomValues(Foo.secret);

  /**
   * @param {String} name
   */
  Foo.greet = function (name) {
    console.log(`Hello, ${name}!`);
  };
})(globalThis.window || {});

console.log(globalThis);
