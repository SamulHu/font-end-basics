var fs = require('fs');
// fs.readFile('file.txt', 'UTF-8', (err,data) => {
//     if(err) {
//         console.log('read file error');
//     }else {
//         console.log(data);
//     }
// })
// console.log('end');

var data = fs.readFileSync('file.txt', 'UTF-8');
console.log(data);
console.log('end.');