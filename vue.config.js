module.exports = {
  lintOnSave: false, //直接关闭eslint检查

  devServer: {
    //关闭遮罩层
    overlay: {
      warnings: false,
      errors: false,
    },
    proxy: {
      "/ajax": {
        target: "http://m.maoyan.com",
        changeOrigin: true, //是否改变域名
        // pathRewrite: {
        //   "^/api": "", //自己去的，用完需要去掉
        // },
      },
    },
  },
};
