var fs = require('fs');
var fileInput = fs.readFileSync(process.argv[2]).toString();
var arr = fileInput.split('\n');
console.log(arr.length-1);