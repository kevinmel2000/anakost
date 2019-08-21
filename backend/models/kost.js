'use strict';
module.exports = (sequelize, DataTypes) => {
  const kost = sequelize.define('kost', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    is_order: DataTypes.BOOLEAN,
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    kec: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE,
    room_length: DataTypes.FLOAT,
    room_width: DataTypes.FLOAT,
    image: DataTypes.STRING,
    created_by: DataTypes.INTEGER
  }, {});
  kost.associate = function(models) {
    // associations can be defined here
    kost.belongsTo(models.user, {
      as: 'createdBy',
      foreignKey: 'created_by',
    })
  };
  return kost;
};