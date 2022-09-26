import PropTypes from "prop-types";
import React, { memo } from "react";
import { PaginationWrapper } from "./style";

import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCurrentPageAction,
  fetchRoomListAction,
} from "@/store/modules/entire/actionCreators";

const EntirePagination = memo((props) => {
  const { totalCount, currentPage, roomsList } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomsList: state.entire.roomsList,
  }));

  // 第一页： 1-20， 第二页： 21-40， 第三页： 31-60
  // currentPage * 20 +1   --- (currentPage + 1) * 20
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;
  // 向上取整  数据总数分成多少页
  const totalPage = Math.ceil(totalCount / 20);

  const dispatch = useDispatch();
  // pageCoun是当前页的页码
  function handlePageChange(event, pageCount) {
    window.scrollTo(0, 0);
    // 将当前页码传给reducer，reducer会修改currentPage的值
    dispatch(changeCurrentPageAction(pageCount - 1));
    // 修改了pageCount 根据当前的页码重新请求数据
    dispatch(fetchRoomListAction());
  }
  return (
    <PaginationWrapper>
      {!!roomsList.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={handlePageChange} />
          <div className="desc">
            <span>
              第{startCount}-{endCount}个房源 共计超过 {totalCount}个住处
            </span>
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

EntirePagination.propTypes = {
  infoData: PropTypes.object,
};

export default EntirePagination;
