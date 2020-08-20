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
    const { ctx } = this;
    const data = await ctx.service.upload.uploadFiles();
    ctx.body = data;
  }
}

module.exports = UploadController;

