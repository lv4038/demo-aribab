import styled from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  flex-direction: column;

  background: #333;

  .top {
    position: relative;
    height: 86px;
    cursor: pointer;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
    }
  }

  .slider {
    flex: 1;
    display: flex;
    justify-content: center;

    position: relative;

    .control {
      > .btn {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        cursor: pointer;
        color: #fff;
      }
      > .left {
        left: 0;
      }

      > .right {
        right: 0;
      }
    }

    .picture {
      position: relative;
      height: 100%;
      width: 100%;
      max-width: 105vh;
      overflow: hidden;

      > img {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }

      .pic-enter {
        /* 根据点击的上一张或者下一张 控制图片移动方向 */
        transform: translateX(${(props) => (props.isNext ? "100%" : "-100%")});
        opacity: 0;
      }

      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 200ms ease;
      }

      .pic-exit {
        opacity: 1;
      }

      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
  }

  .preview {
    height: 100px;
    margin-top: 10px;
    color: #fff;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;

    .info {
      max-width: 105vh;
      overflow: hidden;
      margin: 0 auto;
      /* 要设置绝对定位，隐藏相册列表时，文字才会跟着下移 */
      position: absolute;

      .desc {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;

        .toggle {
          cursor: pointer;
        }
      }

      .list {
        transition: height 300ms ease;
        height: ${(props) => (props.showList ? "67px" : "0")};
        .item {
          width: 20%;
          height: 80px;
          margin-left: 10px;
          overflow: hidden;

          img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            opacity: 0.5;

            &.active {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
