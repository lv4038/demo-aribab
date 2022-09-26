import React, { memo, useState, useEffect } from "react";

import IconAvatar from "@/assets/svg/icon_avatar";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";

import { RightWrapper } from "./style";

const HeaderRight = memo(() => {
  // 隐藏显示  登录卡片面板
  const [showPanel, setShowPanel] = useState(false);

  function handleProfileClick() {
    setShowPanel(true);
  }

  // 点击页面其他地方 隐藏卡片面板
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false);
    }
    // 捕获 从不具体到具体 从上往下 window-->具体元素
    // 如果是冒泡，点击按钮，事件会冒泡到window，window有事件设置为false
    // 卡片面板会不显示
    window.addEventListener("click", windowHandleClick, true);

    return () => {
      window.removeEventListener("click", windowHandleClick, true);
    };
  }, []);
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>

      <div className="profile" onClick={handleProfileClick}>
        <IconMenu />
        <IconAvatar />

        {showPanel && (
          <div className="panel">
            <div className="top">
              <p className="item register">注册</p>
              <p className="item login">登录</p>
            </div>
            <div className="bottom">
              <p className="item">出租房源</p>
              <p className="item">开展体验</p>
              <p className="item">帮助</p>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
