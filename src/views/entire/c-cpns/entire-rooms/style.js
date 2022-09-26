import styled from "styled-components";

export const RoomsWrapper = styled.main`
  padding: 40px 20px;
  margin-top: 120px;
  position: relative;
  .title {
    font-size: 22px;
    font-weight: bold;
    color: #222;
    margin-bottom: 10px;
    margin-left: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }

  > .cover {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(255, 255, 255, 0.8);
  }
`;
