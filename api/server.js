const express = require('express');
const app = express();
const path = require('path');
const db = require('./models');
require('dotenv').config();
const swaggerDocs = require('./swagger/swaggerDocs'); // ajout de Swagger

// Configuration
require('dotenv').config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Swagger route (avant les routes de l'API)
swaggerDocs(app); // <- injection de Swagger à l'adresse /api-docs

// Routes
app.use('/api/shoes', require('./routes/shoeRoutes'));
app.use('/api/purchases', require('./routes/purchaseRoutes'));

// Route de test
app.get('/', (req, res) => {
  res.send('API de vente de chaussures');
});

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Quelque chose s\'est mal passé!');
});

// Port et démarrage du serveur
const PORT = process.env.PORT || 3000;

db.sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Serveur démarré sur le port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erreur de connexion à la base de données:', err);
  });