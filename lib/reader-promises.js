'use strict';

const fs = require('fs');
const{promisify} = require('util');
let contents = [];
let readFileAsync = promisify(fs.readFile);

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */
async function readAll (paths) {

  let contents = [];

  for(let i = 0; i < paths.length; i++) {
    readFileAsync (paths[0], {encoding: 'utf8'})
      .then(result => {
        console.log(`Read File ${i + 1}`);
        contents.push(result);
      })
      .then(() =>{
        console.log('Complete', contents);
      })
  }
}

/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files) => {
  readAll(files);
};
