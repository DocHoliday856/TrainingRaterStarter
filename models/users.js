'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    name: { type: DataTypes.STRING, allowNull:false},
    email: { type: DataTypes.STRING, allowNull:false},
    phone: DataTypes.STRING,
    role: { type: DataTypes.STRING, allowNull:false},
  }, {});
  return Users;
};