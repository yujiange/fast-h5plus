// 配置开始时需要监听的页面
exports.devPage = 'app-template';

const page1_arr = require('./pages/page1.js'); // 开发人员1负责的页面
const page2_arr = require('./pages/page1.js'); // 开发人员2负责的页面
const page3_arr = require('./pages/page1.js'); // 开发人员3负责的页面

// 定义webpack配置文件中的入口以及HtmlWebpackPlugin所需要的参数
exports.pageSet = [
  {
    title: 'app-模板',
    filename: 'app-template'
  },
  {
    title: 'h5-模板',
    filename: 'h5-template'
  },
  ...page1_arr,
  ...page2_arr,
  ...page3_arr
]