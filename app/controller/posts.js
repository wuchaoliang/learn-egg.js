'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {

  async getPost() {
    const { ctx } = this;
    // const res = await this.app.mysql.get('posts', { id: ctx.params.id });
    const res = await ctx.service.posts.getPost(ctx.params.id);
    ctx.body = res;
  }
}

module.exports = PostController;
