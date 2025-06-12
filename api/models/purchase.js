/* Achats de la chaussure */
module.exports = (sequelize, DataTypes) => {
    const Purchase = sequelize.define('Purchase', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    });
  
    Purchase.associate = (models) => {
      Purchase.belongsTo(models.Shoe, {
        foreignKey: 'shoeId',
        as: 'shoe'
      });
    };
  
    return Purchase;
  };