/* Models and service */
const db = require('../models');

class PurchaseService {
  static async getAllPurchases() {
    try {
      return await db.Purchase.findAll({
        include: [{
          model: db.Shoe,
          as: 'shoe'
        }]
      });
    } catch (error) {
      throw error;
    }
  }

  static async getPurchaseById(id) {
    try {
      return await db.Purchase.findByPk(id, {
        include: [{
          model: db.Shoe,
          as: 'shoe'
        }]
      });
    } catch (error) {
      throw error;
    }
  }

  static async createPurchase(purchaseData) {
    try {
      // Vérifier si la chaussure existe
      const shoe = await db.Shoe.findByPk(purchaseData.shoeId);
      if (!shoe) throw new Error('Shoe not found');
      
      // Calculer le prix total
      purchaseData.totalPrice = shoe.price * purchaseData.quantity;
      
      return await db.Purchase.create(purchaseData);
    } catch (error) {
      throw error;
    }
  }

  static async updatePurchase(id, purchaseData) {
    try {
      const purchase = await db.Purchase.findByPk(id);
      if (!purchase) throw new Error('Purchase not found');
      
      // Si la quantité ou la chaussure change, recalculer le prix total
      if (purchaseData.quantity || purchaseData.shoeId) {
        const shoeId = purchaseData.shoeId || purchase.shoeId;
        const shoe = await db.Shoe.findByPk(shoeId);
        if (!shoe) throw new Error('Shoe not found');
        
        const quantity = purchaseData.quantity || purchase.quantity;
        purchaseData.totalPrice = shoe.price * quantity;
      }
      
      return await purchase.update(purchaseData);
    } catch (error) {
      throw error;
    }
  }

  static async deletePurchase(id) {
    try {
      const purchase = await db.Purchase.findByPk(id);
      if (!purchase) throw new Error('Purchase not found');
      
      return await purchase.destroy();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PurchaseService;