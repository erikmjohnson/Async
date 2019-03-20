'use strict';

const fs = require('fs');
const{promisify} = require('util');
let contents = [];
let readFileAsync = promisify(fs.readFile);

module.exports = exports = (files, callback) => {
  return readAll([...files],callback);
  contents = [];
};

/**
* This wraps the fs module, primarily so that we can more easily write tests around it.
* @param file
* @param callback
*/
const readOne = (file) => {
  return readFileAsync(file)
};

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */
const readAll = (paths, callback) => {

  let contents = [];

  return readOne(paths[0])
    .then(result => {
      console.log('Read File 1');
      contents.push(result.toString().trim());
      return readOne(paths[1])
        .then(result => {
          console.log('Read File 2');
          contents.push(result.toString().trim());
          return readOne(paths[2])
            .then(result => {
              console.log('Read File 3');
              contents.push(result.toString().trim());
              callback(null, contents);
            }).catch(console.log(err));
        })
    })
};
