'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theater extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Theater.hasMany(models.Hall, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
      Theater.belongsTo(models.City);
    }
  }
  Theater.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    city_id: DataTypes.INTEGER,
    cancellation_available: DataTypes.BOOLEAN,
    wheel_chair_facility_available: DataTypes.BOOLEAN,
    parking_facility_available: DataTypes.BOOLEAN,
    bank_account_number: DataTypes.STRING,
    ifsc_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Theater',
    paranoid: true,
    underscored: true
  });
  return Theater;
};