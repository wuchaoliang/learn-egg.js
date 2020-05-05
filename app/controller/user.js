'use strict';
const { Op } = require('sequelize');
const md5 = require('md5');
const Controller = require('egg').Controller;

class PostController extends Controller {

  async login() {
    const { ctx, app } = this;
    const { body: { name, password } } = ctx.request;
    const users = await this.ctx.model.Users.findAll({
      where: {
        [Op.and]: [
          { name },
          { password: md5(password) },
        ],
      },
    });
    if (users.length > 0) {
      const user = users[0];
      ctx.status = 200;
      const token = app.jwt.sign({
        id: user.id,
        name: user.name,
      });
      // await app.redis.set(`token_${user.id}`, token);
      ctx.body = {
        status: 'ok',
        type: 'account',
        currentAuthority: 'admin',
        token,
      };
    } else {
      ctx.body = 'res';
    }
  }
}

module.exports = PostController;
