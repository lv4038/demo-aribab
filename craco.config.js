const path = require("path");

const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // 对webpack的配置进行修改
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/component"),
      utils: path.resolve(__dirname, "src/utils"),
      // 配置别名会报错
      // "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
};
