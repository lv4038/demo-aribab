import React, { memo, useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import routes from "./router";

import AppFooter from "./components/app-footer";

const App = memo(() => {
  // 获取location对象 表示链接到的对象的url
  const location = useLocation();
  // 监听路径，如果发生改变，滚动到页面顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app">
      <main className="page">{useRoutes(routes)}</main>
      <AppFooter />
    </div>
  );
});

export default App;
