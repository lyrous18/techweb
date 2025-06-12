/*  Modeles de la chaussure */
module.exports = (sequelize, DataTypes) => {
    const Shoe = sequelize.define('Shoe', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    Shoe.associate = (models) => {
      Shoe.hasMany(models.Purchase, {
        foreignKey: 'shoeId',
        as: 'purchases'
      });
    };
  
    return Shoe;
  };    