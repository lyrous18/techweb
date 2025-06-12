const express = require('express');
const router = express.Router();
const PurchaseController = require('../controllers/purchaseController');

/**
 * @swagger
 * tags:
 *   name: Purchases
 *   description: Gestion des achats
 */

/**
 * @swagger
 * /purchase:
 *   get:
 *     summary: Récupérer la liste de tous les achats
 *     tags: [Purchases]
 *     responses:
 *       200:
 *         description: Liste des achats récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Purchase'
 *
 *   post:
 *     summary: Créer un nouvel achat
 *     tags: [Purchases]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PurchaseInput'
 *     responses:
 *       201:
 *         description: Achat créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Purchase'
 *
 * /purchase/{id}:
 *   get:
 *     summary: Récupérer un achat par son ID
 *     tags: [Purchases]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'achat
 *     responses:
 *       200:
 *         description: Achat trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Purchase'
 *       404:
 *         description: Achat non trouvé
 *
 *   put:
 *     summary: Mettre à jour un achat par son ID
 *     tags: [Purchases]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'achat à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PurchaseInput'
 *     responses:
 *       200:
 *         description: Achat mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Purchase'
 *       404:
 *         description: Achat non trouvé
 *
 *   delete:
 *     summary: Supprimer un achat par son ID
 *     tags: [Purchases]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'achat à supprimer
 *     responses:
 *       204:
 *         description: Achat supprimé avec succès
 *       404:
 *         description: Achat non trouvé
 */


router.get('/', PurchaseController.getAllPurchases);
router.get('/:id', PurchaseController.getPurchaseById);
router.post('/', PurchaseController.createPurchase);
router.put('/:id', PurchaseController.updatePurchase);
router.delete('/:id', PurchaseController.deletePurchase);

module.exports = router;