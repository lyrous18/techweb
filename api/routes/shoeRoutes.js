const express = require('express');
const router = express.Router();
const ShoeController = require('../controllers/shoeController');
const upload = require('../utils/upload');


/**
 * @swagger
 * tags:
 *   name: Shoes
 *   description: Gestion des chaussures
 */

/**
 * @swagger
 * /shoes:
 *   get:
 *     summary: Récupérer la liste de toutes les chaussures
 *     tags: [Shoes]
 *     responses:
 *       200:
 *         description: Liste des chaussures récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Shoe'
 *
 *   post:
 *     summary: Créer une nouvelle chaussure
 *     tags: [Shoes]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Image de la chaussure
 *               name:
 *                 type: string
 *               size:
 *                 type: number
 *               price:
 *                 type: number
 *             required:
 *               - name
 *               - size
 *               - price
 *     responses:
 *       201:
 *         description: Chaussure créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shoe'
 *
 * /shoes/{id}:
 *   get:
 *     summary: Récupérer une chaussure par son ID
 *     tags: [Shoes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la chaussure
 *     responses:
 *       200:
 *         description: Chaussure trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shoe'
 *       404:
 *         description: Chaussure non trouvée
 *
 *   put:
 *     summary: Mettre à jour une chaussure par son ID
 *     tags: [Shoes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la chaussure à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Image de la chaussure
 *               name:
 *                 type: string
 *               size:
 *                 type: number
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Chaussure mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shoe'
 *       404:
 *         description: Chaussure non trouvée
 *
 *   delete:
 *     summary: Supprimer une chaussure par son ID
 *     tags: [Shoes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la chaussure à supprimer
 *     responses:
 *       204:
 *         description: Chaussure supprimée avec succès
 *       404:
 *         description: Chaussure non trouvée
 */


router.get('/', ShoeController.getAllShoes);
router.get('/:id', ShoeController.getShoeById);
router.post('/', upload.single('image'), ShoeController.createShoe);
router.put('/:id', upload.single('image'), ShoeController.updateShoe);
router.delete('/:id', ShoeController.deleteShoe);

module.exports = router;