// 颜色主题  提供给ThemeProvider组件共享
const theme = {
  // 背景颜色
  color: {
    // 主要颜色
    primaryColor: "#ff385c",
    // 次要颜色
    secondaryColor: "#00848A",
  },
  // 文本样式
  textColor: {
    primaryColor: "#484848",
    secondaryColor: "#222",
  },
  // 动画样式
  mixin: {
    boxShow: `
      transition: box-shadow 200ms ease;

      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,0.18)
      }
    `,
  },
};

export default theme;
