import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 80px;

  &.fixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
    background-color: ${(props) =>
      props.theme.isAlpha ? "rgba(255,255,255, 0)" : "#fff"};
  }

  .content {
    // .cover设置了固定定位，会遮住所有文档流元素
    // 需要设置为相对定位
    position: relative;
    z-index: 99;

    /* 根据isAlpha的值动态添加背景颜色 */
    background-color: ${(props) =>
      props.theme.isAlpha ? "rgba(255,255,255, 0)" : "rgba(255,255,255, 1)"};
    border-bottom: 1px solid #eee;
    border-bottom-color: ${(props) =>
      props.theme.isAlpha ? "rgba(233,233,233,0)" : "rgba(233,233,233,1)"};
    .top {
      display: flex;
      align-items: center;
      height: 80px;
      width: 100%;
      padding: 0 26px;
    }
  }

  .cover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
`;

export const SearchAreaWrapper = styled.div`
  height: ${(props) => (props.isSearch ? "100px" : "0px")};
  transition: height 200ms ease;
  width: 100%;
  z-index: 99;
  background-color: ${(props) =>
    props.theme.isAlpha ? "rgba(255,255,255,0)" : "#fff"};
`;
