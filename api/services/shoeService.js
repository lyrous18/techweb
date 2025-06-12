/* Services */
const db = require('../models');

class ShoeService {
  static async getAllShoes() {
    try {
      return await db.Shoe.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getShoeById(id) {
    try {
      return await db.Shoe.findByPk(id);
    } catch (error) {
      throw error;
    }
  }

  static async createShoe(shoeData) {
    try {
      return await db.Shoe.create(shoeData);
    } catch (error) {
      throw error;
    }
  }

  static async updateShoe(id, shoeData) {
    try {
      const shoe = await db.Shoe.findByPk(id);
      if (!shoe) throw new Error('Shoe not found');
      
      return await shoe.update(shoeData);
    } catch (error) {
      throw error;
    }
  }

  static async deleteShoe(id) {
    try {
      const shoe = await db.Shoe.findByPk(id);
      if (!shoe) throw new Error('Shoe not found');
      
      return await shoe.destroy();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ShoeService;