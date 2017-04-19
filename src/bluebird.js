"use strict";
// Holder for whatever old Promise API is being used to avoid conflicts
var old;
if (typeof Promise !== "undefined") old = Promise;
function noConflict() {
    try { if (Promise === bluebird) Promise = old; }
    catch (e) {}
    return bluebird;
}

// 
var bluebird = require("./promise")();
bluebird.noConflict = noConflict;
module.exports = bluebird;
