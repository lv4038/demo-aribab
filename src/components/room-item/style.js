import styled from "styled-components";

export const ItemWrapper = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  // 房间组件的宽度是父组件决定的
  width: ${(props) => props.itemWidth};
  // 父元素设置-8px的margin-left和margin-right可以抵消左右的pandding
  padding: 8px;

  .inner {
    .cover {
      // 解决图片高度不一的问题 ，设置定位
      position: relative;
      // 内边距百分比值是父元素宽度的值
      padding: 66.66% 8px 0;
      cursor: pointer;

      > img {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 5px;
        /* img的内容如何适应高度和宽度到容器 */
        object-fit: cover;
      }
    }

    .slider {
      position: relative;
      cursor: pointer;

      &:hover {
        .control {
          /* 鼠标经过时显示，设置flex也可以 */
          display: flex;
        }
      }

      .control {
        display: none;
        justify-content: space-between;
        align-items: center;
        /* 铺满容器，flex布局居中 */
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 9;

        /* 箭头按钮设置线性渐变 */
        .btn {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          color: #fff;
          /* 设置宽高是为了给线性渐变显示 */
          height: 100%;
          width: 83px;
          background: linear-gradient(
            to left,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 100%
          );

          &.right {
            background: linear-gradient(
              to right,
              transparent 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
            justify-content: flex-end;
          }
        }

        .left {
        }
      }

      .indicator {
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: 10px;
        width: 30%;
        z-index: 9;

        .dots {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20%;

          .dot-item {
            width: 6px;
            height: 6px;
            background: #fff;
            border-radius: 50%;

            &.active {
              width: 10px;
              height: 10px;
            }
          }
        }
      }
    }

    .desc {
      color: ${(props) => props.verifyColor};
      margin-top: 5px;
    }

    .name {
      // 控制文本两行
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin: 5px 0;
    }

    .bottom {
      display: flex;
      align-items: center;
      margin-top: 5px;
      // 修改星星之间的间距，直接覆盖组件库的类名
      .MuiRating-icon {
        margin-right: -2px;
      }

      .count,
      .extra {
        margin-left: 5px;
        font-size: 12px;
      }
    }
  }
`;
