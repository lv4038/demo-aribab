import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";

// 过滤选项的数据
import filterData from "@/assets/data/filter_data.json";

const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([]);

  function handleItemClick(item) {
    const newItem = [...selectItems];
    if (newItem.includes(item)) {
      // 返回当前项的索引
      const itemIndedx = newItem.findIndex((filterItem) => filterItem === item);
      newItem.splice(itemIndedx, 1);
    } else {
      newItem.push(item);
    }
    // 将选中的元素 放进数组中
    setSelectItems(newItem);
  }
  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              key={item}
              className={`item ${selectItems.includes(item) ? "active" : ""}`}
              onClick={(e) => handleItemClick(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

EntireFilter.propTypes = {
  infoData: PropTypes.object,
};

export default EntireFilter;
