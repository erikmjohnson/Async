'use strict';

module.exports = exports = {};

exports.readFileSync = (file, cb) => {
  if(file.match(/bad/i) ) {
    cb('Invalid File');
  }
  else {

    cb(null, new Buffer('File Contents'));
  }
};