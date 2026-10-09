const http = require('http');
const fs = require('fs');
const path = require('path');

// Auto-load .env file variables
if (fs.existsSync(path.join(__dirname, '.env'))) {
  const envContent = fs.readFileSync(path.join(__dirname, '.env'), 'utf-8');
  envContent.split(/\r?\n/).forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const idx = trimmed.indexOf('=');
      if (idx > 0) {
        const key = trimmed.substring(0, idx).trim();
        let val = trimmed.substring(idx + 1).trim();
        if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
        if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
        if (!process.env[key]) process.env[key] = val;
      }
    }
  });
}

const contactHandler = require('./api/contact.js');

const PORT = 5500;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];

  // Route API contact
  if (urlPath === '/api/contact') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        req.body = body ? JSON.parse(body) : {};
      } catch (e) {
        req.body = body;
      }
      
      const resMock = {
        statusCode: 200,
        headers: {},
        setHeader(key, val) { this.headers[key] = val; res.setHeader(key, val); return this; },
        status(code) { this.statusCode = code; res.statusCode = code; return this; },
        json(data) {
          res.setHeader('Content-Type', 'application/json');
          res.writeHead(this.statusCode, res.getHeaders ? res.getHeaders() : this.headers);
          res.end(JSON.stringify(data));
          return this;
        },
        send(data) {
          res.writeHead(this.statusCode, res.getHeaders ? res.getHeaders() : this.headers);
          res.end(data);
          return this;
        }
      };
      contactHandler(req, resMock);
    });
    return;
  }

  // Serve static files
  let filePath = path.join(__dirname, urlPath === '/' ? 'index.html' : urlPath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback for clean URLs or index
      filePath = path.join(__dirname, 'index.html');
    }
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500);
        res.end('Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`🚀 PCD Local Dev Server running on http://localhost:${PORT}`);
  console.log(`✉️  Contact Form API endpoint ready at http://localhost:${PORT}/api/contact`);
  console.log(`==================================================\n`);
});
