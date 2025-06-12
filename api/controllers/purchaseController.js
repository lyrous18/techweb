const PurchaseService = require('../services/purchaseService');

class PurchaseController {
  static async getAllPurchases(req, res) {
    try {
      const purchases = await PurchaseService.getAllPurchases();
      res.status(200).json(purchases);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getPurchaseById(req, res) {
    try {
      const purchase = await PurchaseService.getPurchaseById(req.params.id);
      if (!purchase) {
        return res.status(404).json({ message: 'Purchase not found' });
      }
      res.status(200).json(purchase);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createPurchase(req, res) {
    try {
      const purchaseData = {
        shoeId: req.body.shoeId,
        quantity: req.body.quantity
      };
      
      const newPurchase = await PurchaseService.createPurchase(purchaseData);
      res.status(201).json(newPurchase);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updatePurchase(req, res) {
    try {
      const purchaseData = {
        shoeId: req.body.shoeId,
        quantity: req.body.quantity
      };
      
      const updatedPurchase = await PurchaseService.updatePurchase(req.params.id, purchaseData);
      if (!updatedPurchase) {
        return res.status(404).json({ message: 'Purchase not found' });
      }
      res.status(200).json(updatedPurchase);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deletePurchase(req, res) {
    try {
      const deletedPurchase = await PurchaseService.deletePurchase(req.params.id);
      if (!deletedPurchase) {
        return res.status(404).json({ message: 'Purchase not found' });
      }
      res.status(200).json({ message: 'Purchase deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = PurchaseController;