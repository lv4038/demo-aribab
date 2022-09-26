import styled from "styled-components";

export const ViewWrapper = styled.div`
  // 给子元素使用offsetLeft属性

  position: relative;

  .srcoll {
    overflow: hidden;

    .scroll-content {
      display: flex;
      transition: transform 300ms ease;
    }
  }

  .arrow-left {
    left: -12px;
  }

  .arrow-right {
    right: -12px;
  }

  .control {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 9;
    border-radius: 50%;
    border: 2px solid #dddd;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #fff;
  }
`;
