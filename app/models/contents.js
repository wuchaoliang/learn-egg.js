'use strict';
module.exports = (sequelize, DataTypes) => {
  const contents = sequelize.define('Contents', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    like_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    comment_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  }, {});
  contents.associate = function(models) {
    // associations can be defined here
  };
  return contents;
};