'use strict';

const randomNumber = require('..');
const assert = require('assert').strict;

assert.strictEqual(randomNumber(), 'Hello from randomNumber');
console.info("randomNumber tests passed");
