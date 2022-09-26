import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  // svg会使用离它最近的父元素的current color 这里就相当于设置svg的color
  color: ${(props) =>
    props.theme.isAlpha ? "#fff" : props.theme.color.primaryColor};

  .logo {
    cursor: pointer;
  }
`;
