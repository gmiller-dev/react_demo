module.exports = {
  isProduction: process.env.NODE_ENV === 'production',
  dbUri:'mongodb://localhost/noderest',
  devPort: 8080,
  bundlerDom: 'localhost',
  bundlerPort: 8090,
};
