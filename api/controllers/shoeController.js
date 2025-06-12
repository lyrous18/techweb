const ShoeService = require('../services/shoeService');
const upload = require('../utils/upload');

class ShoeController {
  static async getAllShoes(req, res) {
    try {
      const shoes = await ShoeService.getAllShoes();
      res.status(200).json(shoes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getShoeById(req, res) {
    try {
      const shoe = await ShoeService.getShoeById(req.params.id);
      if (!shoe) {
        return res.status(404).json({ message: 'Shoe not found' });
      }
      res.status(200).json(shoe);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createShoe(req, res) {
    try {
      const shoeData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.file ? req.file.path : null
      };
      
      const newShoe = await ShoeService.createShoe(shoeData);
      res.status(201).json(newShoe);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateShoe(req, res) {
    try {
      const shoeData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
      };
      
      if (req.file) {
        shoeData.image = req.file.path;
      }
      
      const updatedShoe = await ShoeService.updateShoe(req.params.id, shoeData);
      if (!updatedShoe) {
        return res.status(404).json({ message: 'Shoe not found' });
      }
      res.status(200).json(updatedShoe);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteShoe(req, res) {
    try {
      const deletedShoe = await ShoeService.deleteShoe(req.params.id);
      if (!deletedShoe) {
        return res.status(404).json({ message: 'Shoe not found' });
      }
      res.status(200).json({ message: 'Shoe deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ShoeController;