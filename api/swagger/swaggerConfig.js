const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Shoe Store API',
      version: '1.0.0',
      description: 'API pour la gestion de la vente de chaussures',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'], // Tes routes commentées Swagger
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
