const fs = require('fs');

let files = `${process.argv.slice(2)}`;

const readFile = (file, callback) => {

  let randomNumber = `${Math.round(Math.random() * 100)}`;


  fs.readFile(file, (err, data) => {
      if(err) {
        callback(err);
      } else {
        callback(null, data);
      }

      let content = `${data.toString().trim()} ${randomNumber}`;
      fs.writeFileSync(`${file}`, content, (err) => {
        if(err) { throw err }
      });
    console.log(`Random number: ${randomNumber}, has been added`);
    });
};

const readFile2 = (file, callback) => {
  fs.readFile (file, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};


readFile(files, (err) => {
  if(err) {throw err}
  console.log(`Reading file ${files}`);
  readFile2(files, (err, data) => {
    console.log(`${data}`);
    console.log('Operation Complete');
  });
});


