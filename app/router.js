'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/getArticle/:id', controller.home.index);
  router.get('/getPost/:id', controller.posts.getPost);
  require('./router/admin')(app);
};
