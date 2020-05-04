'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [{
      title: '背影',
      content: '买橘子买橘子买橘子买橘子买橘子买橘子买橘子买橘子买橘子买橘子',
      user_id: 1,
    },
    {
      title: '呐喊',
      content: '喊啥喊喊啥喊喊啥喊喊啥喊喊啥喊喊啥喊喊啥喊喊啥喊喊啥喊喊啥喊',
      user_id: 2,
    },
    {
      title: '古诗鉴赏',
      content: '明月光明月光明月光明月光明月光明月光明月光',
      user_id: 1,
    },
    {
      title: '你好',
      content: '你也好你也好你也好你也好你也好你也好',
      user_id: 1,
    },
    {
      title: '路人',
      content: '路人甲路人甲路人甲路人甲路人甲',
      user_id: 2,
    }], {
      timestamps: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});
  }
};
