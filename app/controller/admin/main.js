'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    this.ctx.body = '测试 github actions 8';
  }
  async checkLogin() {
    const userName = this.ctx.request.body.userName || 'test';
    const password = this.ctx.request.body.password || '123456';
    const sql = "SELECT userName FROM admin_user WHERE userName = '" + userName + "' AND password = '" + password + "'";
    const res = await this.app.mysql.query(sql);
    console.log('res', res, userName, password);
    this.ctx.body = 'hi checkLogin';
    if (res.length > 0) {
      const openId = new Date().getTime();
      this.ctx.session.openId = { openId };
      this.ctx.body = { data: '登录成功', openId };
    } else {
      this.ctx.body = { data: '登录失败' };
    }
  }
}

module.exports = MainController;

