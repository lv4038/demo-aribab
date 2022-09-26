import styled from "styled-components";

export const FooterWrapper = styled.footer`
  margin: 20px 0;
  display: flex;

  .info {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 17px;
    color: ${(props) => props.color};
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 5px;
    }
  }
`;
