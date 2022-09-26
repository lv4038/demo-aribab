import PropTypes from "prop-types";
import React, { memo } from "react";
import { HeaderWrapper } from "./style";

// 标题复用组件
const SectionHeader = memo((props) => {
  const { title, subTitle } = props;
  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      {subTitle && <span className="subtitle">{subTitle}</span>}
    </HeaderWrapper>
  );
});

SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default SectionHeader;
