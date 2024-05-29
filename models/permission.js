'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Permission.hasMany(models.RolePermission, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    }
  }
  Permission.init({
    api: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Permission',
    paranoid: true,
    underscored: true
  });
  return Permission;
};