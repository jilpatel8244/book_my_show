'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CastingAndCrewMembers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CastingAndCrewMembers.hasMany(models.MovieMember, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    }
  }
  CastingAndCrewMembers.init({
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    occupation: DataTypes.STRING,
    dob: DataTypes.DATEONLY,
    birth_place: DataTypes.STRING,
    about: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CastingAndCrewMembers',
    tableName: 'CastingAndCrewMembers',
    paranoid: true,
    underscored: true
  });
  return CastingAndCrewMembers;
};