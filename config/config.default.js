/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  // const config = exports = {};

  // const config = {};
  const config = (exports = {
    rundir: '/tmp',
    logger: {
      dir: '/tmp'
    }
  })

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1579965155194_7789';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '120.79.209.56',
      // 端口号
      port: '3307',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'react',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.sequelize = {
    dialect: 'mysql',
    // 这里也可以通过 .env 文件注入环境变量，然后通过 process.env 获取
    host: '120.79.209.56',
    port: '3307',
    database: 'react',
    username: 'root',
    password: '123456',
  };
  config.security = {
    csrf: { enable: true },
    domainWhiteList: [ '*' ],
  };
  config.jwt = {
    secret: '123456',
  };
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  // config.middleware = ['auth'];
  config.multipart = {
    fileSize: '50mb',
    // will append to whilelist
    fileExtensions: [
      '.pdf',
    ],
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.bodyParser = {
		formLimit: '30mb',
    jsonLimit: '30mb',
    textLimit: '30mb'
	}
  return {
    ...config,
    ...userConfig,
  };
};
