'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/getArticle/:id', controller.home.index);
  router.get('/getPost/:id', app.jwt, controller.posts.getPost);
  router.post('/login', controller.user.login);
  require('./router/admin')(app);
  // router.get('/upload', controller.upload.index);
  router.get('/upload/add', controller.upload.add);
  // router.get('/upload/edit', controller.upload.edit);
  router.post('/upload/doAdd', controller.upload.doAdd);

};
