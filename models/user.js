'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, { tableName: 'users'});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};