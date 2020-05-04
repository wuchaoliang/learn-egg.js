'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log('ctx', this);
    // const res = await this.app.mysql.get('article', { id: ctx.params.id });
    // const res = await ctx.model.users.findById(ctx.params.id);
    ctx.body = 11;
  }
}

module.exports = HomeController;
