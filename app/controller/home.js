'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // console.log(3333, this.app.mysql.get('block'));
    const res = await this.app.mysql.get('block', { id: 1 });
    // await this.app.mysql.insert('article', { title: 'Hello World',title: 'Hello World',introduce: 'introduce11'});
    // const res = await this.app.mysql.insert('react', { title: 'Hello World' });
    console.log('res', res);
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
