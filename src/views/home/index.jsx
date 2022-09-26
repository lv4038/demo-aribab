import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";

import { HomeWrapper } from "./style";
// 轮播图组件
import HomeBanner from "./c-cpns/home-banner";
// 房间区域通用组件  传入渲染数据，直接渲染房间列表
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import HomeLongfor from "./c-cpns/home-longfor";
import HomeSectionV3 from "./c-cpns/home-section-v3";
import AppHeader from "@/components/app-header";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Home = memo(() => {
  const dispatch = useDispatch();
  // 从redux获取数据
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );

  useEffect(() => {
    // 派发action  高性价比房源请求
    dispatch(fetchHomeDataAction());
    // 设置固定定位  透明度
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }));
  }, [dispatch]);

  return (
    <HomeWrapper>
      <AppHeader />
      <HomeBanner />
      <div className="content">
        {/* 选项卡切换房间列表 在discountInfo对象有key值的情况下才渲染 */}
        {Object.keys(discountInfo).length && (
          <HomeSectionV2 infoData={discountInfo} />
        )}
        {Object.keys(recommendInfo).length && (
          <HomeSectionV2 infoData={recommendInfo} />
        )}
        {/* 高性价比房源列表 */}
        {Object.keys(goodPriceInfo).length && (
          <HomeSectionV1 infoData={goodPriceInfo} />
        )}
        {/* 高评分房源列表 */}
        {Object.keys(highScoreInfo).length && (
          <HomeSectionV1 infoData={highScoreInfo} />
        )}
        {/* 更多出行 */}
        {Object.keys(longforInfo).length && (
          <HomeLongfor infoData={longforInfo} />
        )}
        {/* plus房源 */}
        {Object.keys(plusInfo).length && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
