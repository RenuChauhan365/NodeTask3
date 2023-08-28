
const fs = require('fs');
const path = require('path');

module.exports = function (dirName, extFilter, callback) {
  fs.readdir(dirName, (err, files) => {
    if (err) {
      return callback(err);
    }

    const filteredFiles = files.filter(file => path.extname(file) === `.${extFilter}`);
    callback(null, filteredFiles);
  });

};


// _______________________main solution________________________

//const fs = require('fs')
//    const path = require('path')

//    module.exports = function (dir, filterStr, callback) {
//      fs.readdir(dir, function (err, list) {
//        if (err) {
//          return callback(err)
//        }

//        list = list.filter(function (file) {
//          return path.extname(file) === '.' + filterStr
//        })

//        callback(null, list)
//      })
//    }