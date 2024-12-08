const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
  request.on('close', ()=>{console.log('connection closed');});
};

const server = http.createServer(requestListener);

server.listen(8080);

console.log('Server is running on port 8080');