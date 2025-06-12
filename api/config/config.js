require('dotenv').config();

// Vérification des variables d'environnement requises
const requiredEnvVars = ['DB_USER', 'DB_PASS', 'DB_NAME', 'DB_HOST'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`La variable d'environnement ${envVar} est manquante`);
  }
}

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    // Retirer l'option authPlugins inutile et génératrice d'erreur
    dialectOptions: {
      // Tu peux laisser vide ou complètement enlever dialectOptions si pas d'options spécifiques
    }
  },
  test: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || null,
    database: process.env.DB_NAME || 'commerce_test',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};
