'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MovieMember.belongsTo(models.Movie);
      MovieMember.belongsTo(models.CastingAndCrewMembers);
    }
  }
  MovieMember.init({
    movie_id: DataTypes.INTEGER,
    member_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MovieMember',
    paranoid: true,
    underscored: true
  });
  return MovieMember;
};