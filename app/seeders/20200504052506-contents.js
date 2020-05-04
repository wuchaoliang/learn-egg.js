'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Contents', [
      {
        user_id: 1,
        title: '荷塘月色',
        content: '今晚夜色真美今晚夜色真美今晚夜色真美今晚夜色真美今晚夜色真美',
        like_count: 12,
        comment_count: 34,
      },
      {
        user_id: 2,
        title: '背影',
        content: '买橘子买橘子买橘子买橘子买橘子买橘子买橘子买橘子买橘子买橘子',
        like_count: 68,
        comment_count: 93,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
