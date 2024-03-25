// src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Specify the API endpoint you want to proxy
    createProxyMiddleware({
      target: 'http://fe-test.dev.rampnow.io:8000', // Specify the target URL of the backend API
      changeOrigin: true, // Change the origin of the request to match the target URL
    })
  );
};
