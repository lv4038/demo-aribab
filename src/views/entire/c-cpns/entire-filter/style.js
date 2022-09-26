import styled from "styled-components";

export const FilterWrapper = styled.section`
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(235, 235, 235);
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #fff;

  .filter {
    display: flex;
    padding-left: 20px;
    background-color: rgb(255, 255, 255);

    .item {
      font-size: 14px;
      padding: 6px 12px;
      border: 1px solid rgb(220, 224, 224);
      border-radius: 4px;
      cursor: pointer;
      text-align: center;
      margin: 0 4px 0 8px;

      &.active {
        background-color: ${(props) => props.theme.color.secondaryColor};
        color: #fff;
      }
    }
  }
`;
