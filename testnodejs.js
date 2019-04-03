const http = require('http');

const csv = require('csv-parser')
const fs = require('fs')


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const results = [];

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results[0].NAME);
      console.log(results);
      console.log(typeof results);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
   });  
  res.end("asdas");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


