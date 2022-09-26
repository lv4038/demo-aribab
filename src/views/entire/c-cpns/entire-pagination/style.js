import styled from "styled-components";

export const PaginationWrapper = styled.footer`
  display: flex;
  justify-content: center;

  .info {
    .MuiPaginationItem-icon {
      font-size: 26px;
    }
    /* 覆盖mui组件库的类名 */
    .MuiPaginationItem-page {
      &:hover {
        text-decoration: underline;
      }
    }

    .MuiPaginationItem-page.Mui-selected {
      background-color: #222;
      color: #fff;
    }

    .desc {
      text-align: center;
      margin: 20px 0;
      color: #222;
    }
  }
`;
