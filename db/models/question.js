'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category }) {
      this.belongsTo(Category, { foreignKey: 'category_id' });
    }
  }
  Question.init(
    {
      content: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      difficulty: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
