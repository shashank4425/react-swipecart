const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/Swipecart/api-user-auth_token',
     createProxyMiddleware({
      target: 'https://swipecartapi.herokuapp.com',
      changeOrigin: true,
    })
),
    app.use(
        '/Swipecart/api/GETSwipecartitems',
        createProxyMiddleware({
          target: 'https://swipecartapi.herokuapp.com',
          changeOrigin: true,
        })
  ),
  app.use(
    '/Swipecart/api/AddtoCart',
    createProxyMiddleware({
      target: 'https://swipecartapi.herokuapp.com',
      changeOrigin: true,
    })
  ),
    app.use(
      '/Swipecart/api/RemoveSwipecartitem',
      createProxyMiddleware({
        target: 'https://swipecartapi.herokuapp.com',
        changeOrigin: true,
      })
    ),
    app.use(
      '/Swipecart/api-register_auth',
      createProxyMiddleware({
        target: 'https://swipecartapi.herokuapp.com',
        changeOrigin: true,
      })
    ),
    app.use(
      '/Swipecart/api-user_loginauth',
      createProxyMiddleware({
        target: 'https://swipecartapi.herokuapp.com',
        changeOrigin: true,
      })
    )  
};