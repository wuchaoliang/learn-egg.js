'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      password: STRING(30),
      age: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    }, {
      tableName: 'users',
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
