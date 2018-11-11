'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sessions = sequelize.define('Users', {
    name: { type: DataTypes.STRING, allowNull:false},
    startTime: { type: DataTypes.DATE, allowNull:false},
    location: DataTypes.STRING
  }, {});
  return Sessions;
};