'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      courses.belongsToMany(models.User, {through: 'usersCourses', foreignKey: 'courseId'})
      courses.hasMany(models.sections, {as: 'Id'})
    }
  }
  courses.init({
    courseTitle: DataTypes.STRING,
    courseDesc: DataTypes.STRING,
    courseInstructor: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    coursePrice: DataTypes.FLOAT,
    courseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'courses',
  });
  return courses;
};