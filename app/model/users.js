'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Users = app.model.define('users', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING(30),
    password: STRING,
    age: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  Users.prototype.associate = function() {
    app.model.Users.hasMany(app.model.Posts, { as: 'posts' });
  };

  return Users;
};
