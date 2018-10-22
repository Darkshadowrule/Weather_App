const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const argv=yargs.option({
  a:{
    demand:true,
    alias:'address',
    describe:"Address of location",
    string:true
  }
}).
help()
.argv;
var address=argv.a
geocode.address(address)
