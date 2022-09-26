import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.textColor.primaryColor};

  .btns {
    display: flex;
    margin-right: 8px;
    color: ${(props) => (props.theme.isAlpha ? "#fff" : "#000")};

    .btn {
      height: 18px;
      line-height: 18px;
      cursor: pointer;
      border-radius: 22px;
      padding: 12px;
      box-sizing: content-box;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    width: 77px;
    height: 42px;
    border: 1px solid #ccc;
    border-radius: 20px;
    cursor: pointer;
    color: #717171;
    z-index: 11;

    /* 动画样式复用 */
    ${(props) => props.theme.mixin.boxShow}

    .panel {
      position: absolute;
      top: 55px;
      right: 0;
      width: 240px;
      background: #fff;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.18);
      border-radius: 10px;
      color: #000;

      .top,
      .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`;
