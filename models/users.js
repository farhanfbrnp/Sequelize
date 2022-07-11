'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Users, {foreignKey: 'userId', as: 'user'})
      User.belongsToMany(models.coures, {through: 'courses', foreignKey: 'courseId'})
    }
  }
  Users.init({
    userName: DataTypes.STRING,
    userEmail: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};