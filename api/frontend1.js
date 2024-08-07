const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const app = express();

app.use(
  '',
  createProxyMiddleware({
    target: 'https://td54vfms-4200.asse.devtunnels.ms',
    changeOrigin: true,
    secure: false
  })
);

app.listen(3003);
