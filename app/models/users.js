'use strict';
module.exports = (sequelize, DataTypes) => {
  const { STRING, INTEGER, DATE } = DataTypes;
  const Users = sequelize.define('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    name: {
      type: STRING(30),
      unique: true,
    },
    password: STRING(32),
    age: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};