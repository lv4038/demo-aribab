import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme";

import store from "./store";
import App from "./App";
import "normalize.css";
import "./assets/css/index.less";

const root = ReactDOM.createRoot(document.getElementById("root"));
// 要将suspense组件包裹在Provider组件内部， Provider组件不监听异步加载的组件的事件
// Suspense是处理异步加载的组件的，
root.render(
  <Provider store={store}>
    <Suspense fallback="loading">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>
);
