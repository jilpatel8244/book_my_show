'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MovieLanguage.belongsTo(models.Language);
      MovieLanguage.belongsTo(models.Movie);
    }
  }
  MovieLanguage.init({
    movie_id: DataTypes.INTEGER,
    language_id: DataTypes.INTEGER,
    poster_url: DataTypes.STRING,
    trailer_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MovieLanguage',
    paranoid: true,
    underscored: true
  });
  return MovieLanguage;
};