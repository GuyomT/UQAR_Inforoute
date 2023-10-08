const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  console.log('Proxy middleware is running...');
  app.use(
    '/api/getFlights',
    createProxyMiddleware({
      target: 'https://api.travelpayouts.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/v1/prices/cheap',
      },
    })
  );
};
