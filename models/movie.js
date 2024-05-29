'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.hasMany(models.MovieLanguage, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
      Movie.hasMany(models.MovieMember, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
      Movie.hasMany(models.Show, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
      Movie.hasMany(models.RatingAndReview, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    release_date: DataTypes.DATEONLY,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Movie',
    paranoid: true,
    underscored: true
  });
  return Movie;
};