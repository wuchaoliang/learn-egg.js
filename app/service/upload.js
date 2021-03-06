const Service = require("egg").Service;
const qiniu = require("qiniu");
const nodeStream = require('stream');
const bucket = "egg-test"; //要上传的空间名
const accessKey = "atfY2jKzbFVVvq4FqT5ctkgSS8CnhOCe6SQbkbR8"; //Access Key
const secretKey = "63BUwD95FOrXi0mhqe-nvXj_NxEUM2J97rJ-j78r"; //Secret Key
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const options = {
  scope: bucket
};
const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken = putPolicy.uploadToken(mac);
let config = new qiniu.conf.Config();
config.zone = qiniu.zone.Zone_z2;
class upload extends Service {
  async uploadFiles() {
    const stream = await this.ctx.getFileStream(); // 获取表单提交的数据
    const formUploader = new qiniu.form_up.FormUploader(config);
    let putExtra = new qiniu.form_up.PutExtra(stream.filename, {},stream.mimeType);
    const imgSrc = await new Promise((resolve, reject) => {
      formUploader.putStream(uploadToken, `${stream.filename}-${new Date().getTime()}`, stream, putExtra, function(respErr,
        respBody, respInfo) {
        if (respErr) {
          reject({respErr,
          respBody, respInfo});
        }
        if (respInfo.statusCode == 200) {
          resolve(respBody);
        } else {
          reject({respErr,
          respBody, respInfo});
        }
      });
    });
    console.log('imgSrc', imgSrc);
    console.log('stream', stream);
    if (imgSrc !== "") {
      return {
        imgSrc: imgSrc,
        '文件访问地址':`http://qfasp1eiv.hn-bkt.clouddn.com/${imgSrc.key}`
      };
    } else {
      return imgSrc;
    }
  }

  async uploadBase64Files(fileObj) {
    // const stream = await this.ctx.getFileStream(); // 获取表单提交的数据
    // console.log('stream111', stream);
    const {
        name,
        size,
        type,
        b64string
    } = fileObj
    
    var buff = new Buffer(b64string, 'base64')
    console.log('buff', buff);
    var stream = new nodeStream.Duplex();
    stream.push(buff);
    stream.push(null);
    const formUploader = new qiniu.form_up.FormUploader(config);
    let putExtra = new qiniu.form_up.PutExtra(fileObj.name, {},fileObj.type);
    const imgSrc = await new Promise((resolve, reject) => {
      formUploader.putStream(uploadToken, `${fileObj.name}-${new Date().getTime()}`, stream, putExtra, function(respErr,
        respBody, respInfo) {
        if (respErr) {
          reject({respErr,
          respBody, respInfo});
        }
        if (respInfo.statusCode == 200) {
          resolve(respBody);
        } else {
          reject({respErr,
          respBody, respInfo});
        }
      });
    });
    console.log('imgSrc', imgSrc);
    console.log('stream',stream);
    if (imgSrc !== "") {
      return {
        imgSrc: imgSrc,
        '文件访问地址':`http://qfasp1eiv.hn-bkt.clouddn.com/${imgSrc.key}`
      };
    } else {
      return 'imgSrc';
      // return imgSrc;
    }
  }
}
module.exports = upload;
