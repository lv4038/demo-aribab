import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemWrapper } from "./style";

// 更多出行渲染组件
const LongforItem = memo((props) => {
  const { itemData } = props;
  return (
    <ItemWrapper>
      <div className="inner">
        <div className="inner-info">
          <img
            className="cover"
            src={itemData.picture_url}
            alt={itemData.city}
          />
          {/* 半透明图片增加深色 */}
          <div className="bg-cover"></div>
          <div className="info">
            <h2 className="city">{itemData.city}</h2>
            <span className="price">均价 {itemData.price}</span>
          </div>
        </div>
      </div>
    </ItemWrapper>
  );
});

LongforItem.propTypes = {
  itemData: PropTypes.object,
};

export default LongforItem;
