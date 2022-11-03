'use strict';

const randomString = require('..');
const assert = require('assert').strict;

assert.strictEqual(randomString(), 'Hello from randomString');
console.info("randomString tests passed");
