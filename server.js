const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = 3000;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html',
  '.js':   'text/javascript',
  '.css':  'text/css',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.svg':  'image/svg+xml',
};

function safeResolvePath(requestUrl) {
  const parsed = new URL(requestUrl, `http://localhost:${PORT}`);
  const pathname = decodeURIComponent(parsed.pathname);
  const target = pathname === '/' ? '/index.html' : pathname;

  // Force relative join semantics and block escaping the repo root.
  const normalized = path.normalize(target).replace(/^[\\/]+/, '');
  const file = path.resolve(ROOT, normalized);
  if (!file.startsWith(ROOT + path.sep) && file !== ROOT) return null;
  return file;
}

http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Method not allowed');
    return;
  }

  const file = safeResolvePath(req.url || '/');
  if (!file) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bad request');
    return;
  }

  const ext = path.extname(file);
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'no-referrer',
      'Cache-Control': 'no-store',
    });
    if (req.method === 'HEAD') {
      res.end();
      return;
    }
    res.end(data);
  });
}).listen(PORT, () => console.log(`Titan Sim running at http://localhost:${PORT}`));
