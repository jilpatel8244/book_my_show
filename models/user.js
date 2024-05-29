'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role);
      User.belongsTo(models.State);
      User.belongsTo(models.City);
      User.hasMany(models.Booking, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
      User.hasMany(models.RatingAndReview, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
    }
  }
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    user_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    gender: DataTypes.ENUM('male', 'female', 'other'),
    address: DataTypes.TEXT,
    zipcode: DataTypes.STRING,
    salt: DataTypes.INTEGER,
    password: DataTypes.STRING,
    activation_code: DataTypes.STRING,
    state_id: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
    paranoid: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
  });
  return User;
};