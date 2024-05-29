'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RatingAndReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RatingAndReview.belongsTo(models.User);
      RatingAndReview.belongsTo(models.Movie);
    }
  }
  RatingAndReview.init({
    movie_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    review: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'RatingAndReview',
    paranoid: true,
    underscored: true
  });
  return RatingAndReview;
};