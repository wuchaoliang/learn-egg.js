'use strict';

const Service = require('egg').Service;

class Posts extends Service {

  async getPost(id) {
    // console.log(111111111,this.ctx.model.Posts.findById);
    const res = await this.ctx.model.Posts.findByPk(id);
    // const post = await this.app.mysql.get('posts', { id });
    return res;
  }
}

module.exports = Posts;
