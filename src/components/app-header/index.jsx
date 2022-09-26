import React, { memo, useCallback, useRef, useState } from "react";
import { HeaderWrapper, SearchAreaWrapper } from "./style";

import HeaderLeft from "./cpn/header-left";
import HeaderCenter from "./cpn/header-center";
import HeaderRight from "./cpn/header-right";
import { shallowEqual, useSelector } from "react-redux";
import useScrollPosition from "@/hooks/useScrollPosition";
import { ThemeProvider } from "styled-components";

const AppHeader = memo(() => {
  // 是否为搜索状态，要显示search-sections search-tabs组件
  const [isSearch, setIsSearch] = useState(false);

  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { isFixed, topAlpha } = headerConfig;

  // 监听滚动
  const { scrollY } = useScrollPosition();
  // 记录当前位置
  const prevY = useRef(0);
  // isSearch为false，说明搜索框隐藏， 记录当前滚动的值
  if (!isSearch) prevY.current = scrollY;
  // 如果搜索框弹出，并且当前滚动位置和上一次的滚动位置，超过30，就隐藏搜索框
  // 取绝对值，不管是向上还是向下滚动都会作为返回值
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false);

  // 监听透明度 HeaderWrapper要窗口滚动到顶部才会使用透明度
  const isAlpha = topAlpha && scrollY === 0;

  // 显示隐藏搜索框
  const handleBarClick = useCallback((isBar) => {
    setIsSearch(isBar);
  }, []);

  return (
    // 将isAlpha的值共享，多个子组件需要根据这个值 添加样式
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper isAlpha={isAlpha} className={isFixed ? "fixed" : ""}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            {/* scrollY 为0且topAlpha为true 时，isAlpha为true 搜索框显示 背景透明 
                或者isSearch为true ，搜索框显示 但背景不会透明 */}
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchBarClick={(e) => handleBarClick(true)}
            />
            <HeaderRight />
          </div>
          {/* 点击搜索出现的留白区域 如果isAlpha为true表示滚动到了顶部，显示搜索框并且背景透明
              逻辑或运算符第一个操作符为true时，直接返回的第一个操作符，不会运算后面的操作符
              如果isAlpha为false，表示不是在顶部，逻辑或运算符就会使用isSearch的值来控制搜索框是否显示 */}
          <SearchAreaWrapper isSearch={isAlpha || isSearch} />
        </div>
        {/* 和搜索框一起出现的蒙版 */}
        {isSearch && (
          <div className="cover" onClick={(e) => handleBarClick(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
