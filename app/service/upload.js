const Service = require("egg").Service;
const fs = require("fs");
const path = require("path");
const qiniu = require("qiniu");
const awaitWriteStream = require("await-stream-ready").write;
const sendToWormhole = require("stream-wormhole");
const md5 = require("md5");
const bucket = "egg-test"; //要上传的空间名
const imageUrl = "egg-test.s3-cn-south-1.qiniucs.com"; // 空间绑定的域名
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
    let localFilePath = 'app/public/upload/' + path.basename(stream.filename); // "filename":"c:/images/291051166-5b20eca6448e8_articlex.png",  path.basename  => 291051166-5b20eca6448e8_articlex.png
    const writeStream = fs.createWriteStream(localFilePath);




    // const stream = await ctx.getFileStream();
    console.log('stream',stream)
    const filename =
      md5(stream.filename) + path.extname(stream.filename).toLocaleLowerCase();
    // const localFilePath = path.join(__dirname, "../public/uploads", filename);
    // const writeStream = fs.createWriteStream(localFilePath);
    try {
      await awaitWriteStream(stream.pipe(writeStream));
      const formUploader = new qiniu.form_up.FormUploader(config);
      const putExtra = new qiniu.form_up.PutExtra();
      const imgSrc = await new Promise((resolve, reject) => {
        formUploader.putFile(
          uploadToken,
          filename,
          localFilePath,
          putExtra,
          (respErr, respBody, respInfo) => {
            if (respErr) {
              reject("");
            }
            if (respInfo.statusCode == 200) {
              resolve(imageUrl + respBody.key);
            } else {
              reject("");
            }
            // 上传之后删除本地文件
            fs.unlinkSync(localFilePath);
          }
        );
      });
      if (imgSrc !== "") {
        return {
          url: imgSrc,
          accessUrl:'http://qfasp1eiv.hn-bkt.clouddn.com/'+imgSrc.split('.com')[1]
        };
      } else {
        return false;
      }
    } catch (err) {
      //如果出现错误，关闭管道
      await sendToWormhole(stream);
      return false;
    }
  }
}
module.exports = upload;
