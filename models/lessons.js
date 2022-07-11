'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lessons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      lessons.belongsTo(models.sections, {foreignKey: 'sectionId'})
    }
  }
  lessons.init({
    lessonnTitle: DataTypes.STRING,
    courseId: DataTypes.INTEGER,
    sectionId: DataTypes.INTEGER,
    lessonId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lessons',
  });
  return lessons;
};