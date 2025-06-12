const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');

function swaggerDocs(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = swaggerDocs;
