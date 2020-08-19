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
    console.log('data11',data);
    if(data){
      ctx.body = data;
    }else{
      ctx.body = {
        message:"上传失败"
      }
    }
  }
}

module.exports = UploadController;

