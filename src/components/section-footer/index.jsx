import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { FooterWrapper } from "./style";

import IconArrowMore from "@/assets/svg/icon_arrow-more";

// 传入一个name属性，根据name有没有值，显示不同的内容
const SectionFooter = memo((props) => {
  const { name } = props;

  let showMessage = "显示全部";
  if (name) {
    showMessage = `查看更多${name}房源`;
  } else {
    showMessage = "显示全部";
  }

  // 路由跳转
  const navigate = useNavigate();
  // 跳转到详情页
  function handleMoreClick() {
    navigate("/entire");
  }

  return (
    <FooterWrapper color={name ? "#008489" : "#000"}>
      <div className="info" onClick={handleMoreClick}>
        {/* 根据name的值添加类名 */}
        <span className="text">{showMessage}</span>
        <IconArrowMore />
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
