'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
const pump = require('mz-modules/pump');
class UploadController extends Controller {
  async add() {
    await this.ctx.render('upload/add');
  }
  
  async doAdd() {
    const stream = await this.ctx.getFileStream(); // 获取表单提交的数据
    if (!stream.filename) { // 注意如果没有传入图片直接返回
      return;
    }

    // 图片上传到静态文件夹
    let target = 'app/public/upload/' + path.basename(stream.filename); // "filename":"c:/images/291051166-5b20eca6448e8_articlex.png",  path.basename  => 291051166-5b20eca6448e8_articlex.png
    const writeStream = fs.createWriteStream(target);
    console.log('stream',stream)
    console.log('writeStream',writeStream)
    await pump(stream, writeStream); // stream.pipe(writeStream);   //可以用， 但是不建议,因为不能处理失败的情况

    // 存入数据库
    target = target.slice(3);
    const newUser = Object.assign(stream.fields, {
      avator: target,
    });
    console.log('newUser',newUser)
    // await this.ctx.service.upload.doAdd(newUser);
    // 跳转
    this.ctx.redirect('/upload/add');
  }
}

module.exports = UploadController;

