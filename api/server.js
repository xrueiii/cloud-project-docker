const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello from API version!' }));
});

server.listen(4000, () => {
  console.log('API server running on http://localhost:4000');
});
