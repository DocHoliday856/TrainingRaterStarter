'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sessions = sequelize.define('Sessions', {
    name: DataTypes.STRING,
    startTime: DataTypes.DATE,
    location: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Sessions;
};