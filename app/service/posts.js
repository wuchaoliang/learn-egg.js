'use strict';

const Service = require('egg').Service;

class Posts extends Service {

  async getPost(id) {
    const res = await this.ctx.model.Posts.findByPk(id);
    return res;
  }
}

module.exports = Posts;
