import React, { memo } from "react";
import { CSSTransition } from "react-transition-group";

import SearchSection from "./c-cpns/search-sections";
import SearchTabs from "./c-cpns/search-tabs";

import IconSearchBar from "@/assets/svg/icon_search_bar";

import SearchTitles from "@/assets/data/search_titles";

import { CenterWrapper } from "./style";
import { useState } from "react";

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props;
  // 过滤数据 只需要拿到title的值 组成数据给tabs组件传过去渲染
  const titles = SearchTitles.map((item) => item.title);
  // 记录tabs组件当前选中的元素索引
  const [tabIndex, setTabIndex] = useState(0);

  function handleTabClick(index) {
    // 赋值当前元素的索引
    setTabIndex(index);
  }

  // 点击按钮 调用父组件传递的函数 弹出搜索框
  function handleSearchClick() {
    searchBarClick && searchBarClick(true);
  }

  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={handleSearchClick}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit
      >
        <div className="search-detail">
          <SearchTabs
            titles={titles}
            tabClick={(index) => handleTabClick(index)}
          />
          <div className="infos">
            <SearchSection searchInfos={SearchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
      {/* 根据isSearch的值切换内容 */}
    </CenterWrapper>
  );
});

export default HeaderCenter;
