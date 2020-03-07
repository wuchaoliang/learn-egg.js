'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log('ctx', ctx.params);
    // console.log(3333, this.app.mysql.get('block'));
    const res = await this.app.mysql.get('article', { id: ctx.params.id });
    // await this.app.mysql.insert('article', { id: 3, title: 'Hello World', introduce: 'introduce11', content: 'contentcontent' });
    // const res = await this.app.mysql.insert('react', { title: 'Hello World' });
    // console.log('res', res);
    ctx.body = res;
  }
}

module.exports = HomeController;
