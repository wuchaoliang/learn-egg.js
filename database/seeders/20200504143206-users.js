'use strict';
const md5 = require("md5");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'John',
      password: md5('123456'),
      age: 34,
    },
    {
      name: 'Jack',
      password: md5('654321'),
      age: 54,
    }], {
      timestamps: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
