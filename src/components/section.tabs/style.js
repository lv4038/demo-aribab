import styled from "styled-components";

export const TabsWrapper = styled.div`
  margin-bottom: 20px;

  .item {
    /* 固定宽度 */
    flex-basis: 120px;
    height: 48px;
    /* 设置为高度的一半 能让文本垂直居中  神奇 */
    line-height: 18px;
    border-radius: 3px;
    border: 1px solid #00848a;
    background-color: #fff;
    margin: 0 10px;
    padding: 14px 16px;
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
    font-size: 17px;
    font-weight: bold;
    text-align: center;
    box-sizing: border-box;

    ${(props) => props.theme.mixin.boxShow}

    &:last-child {
      margin-right: 0;
    }

    &:first-child {
      margin-left: 0;
    }

    // 选中状态
    &.active {
      color: #fff;
      background-color: ${(props) => props.theme.color.secondaryColor};
    }
  }
`;
