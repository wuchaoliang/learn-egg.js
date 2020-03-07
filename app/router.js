'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/getArticle/:id', controller.home.index);
  require('./router/admin')(app);
};
