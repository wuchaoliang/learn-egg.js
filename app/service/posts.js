'use strict';

const Service = require('egg').Service;

class Posts extends Service {

  async getPost(id) {
    // const post = await this.ctx.model.Post.findByPk(id, {
    //   include: [{
    //     model: this.ctx.model.User,
    //     as: 'user',
    //     attributes: [ 'id', 'name', 'age' ],
    //   }],
    // });
    // if (!post) {
    //   this.ctx.throw(404, 'post not found');
    // }
    const post = await this.app.mysql.get('posts', { id });
    return post;
  }
}

module.exports = Posts;
