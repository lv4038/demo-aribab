import AppHeader from "@/components/app-header";
import { changeHeaderConfigAction } from "@/store/modules/main";
import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import DetailInfo from "./c-cpns/detail-infos";
import DetailPictures from "./c-cpns/detail-pictures";
import { DetailWrapper } from "./style";

const Detail = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    // 设置顶部组件的样式，不固定定位
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }));
  }, [dispatch]);
  return (
    <DetailWrapper>
      <AppHeader />
      <DetailPictures />
      <DetailInfo />
    </DetailWrapper>
  );
});

export default Detail;
