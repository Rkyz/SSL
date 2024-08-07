const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use('/', createProxyMiddleware({ target: 'http://192.168.0.132:8383', changeOrigin: true }));
app.listen(3000, () => {
  console.log('Proxy server running on http://localhost:3000');
});
