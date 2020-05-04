'use strict';
const { Op } = require('sequelize');
const md5 = require('md5');
const Controller = require('egg').Controller;

class PostController extends Controller {

  async login() {
    const { ctx } = this;
    const { body: { name, password } } = ctx.request;
    const res = await this.ctx.model.Users.findAll({
      where: {
        [Op.and]: [
          { name },
          { password: md5(password) },
        ],
      },
    });
    ctx.body = res;
  }
}

module.exports = PostController;
