const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = req.url === '/' ? 'index.html' : req.url.substring(1);
    const fullPath = path.join(__dirname, filePath);
    
    fs.readFile(fullPath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
});

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080');
});
