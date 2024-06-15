
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'test.txt');

  switch (req.url) {
    case '/create':
      
      fs.writeFile(filePath, 'Hello World!', (err) => {
        if (err) throw err;
        res.end('File created successfully.');
      });
      break;
    case '/read':
      
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        res.end(data);
      });
      break;
    case '/delete':
      
      fs.unlink(filePath, (err) => {
        if (err) throw err;
        res.end('File deleted successfully.');
      });
      break;
    default:
      res.end('Invalid request');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
