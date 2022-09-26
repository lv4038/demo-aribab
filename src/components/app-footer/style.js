import styled from "styled-components";

export const FooterWrapper = styled.footer`
  border-top: 1px solid #ddd;
  .wrapper {
    width: 1080px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 48px;

    .service {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding-bottom: 30px;

      .item {
        .list {
          margin-top: 10px;

          .iten {
            list-style-type: none;
            color: #767676;
            margin-top: 10px;

            > a:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }

    .statement {
      margin-top: 20px;
      margin-bottom: 20px;
      display: flex;

      .filing {
        display: flex;
        align-items: center;
        margin-right: 250px;

        > span {
          margin-left: 10px;
          font-size: 13px;
          line-height: 20px;
        }
      }

      .jump {
        display: flex;
        align-items: center;

        & span {
          padding-left: 8px;
          padding-right: 8px;
        }
      }
    }
  }
`;
