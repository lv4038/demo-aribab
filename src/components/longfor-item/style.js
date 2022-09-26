import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: 20%;
  flex-shrink: 0;
  cursor: pointer;
  .inner {
    padding: 8px;
    overflow: hidden;

    .inner-info {
      position: relative;
    }
  }

  .cover {
    width: 100%;
    border-radius: 5px;
  }

  .bg-cover {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60%;
    border-radius: 5px;
    background-image: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0) 3%,
      rgb(0, 0, 0) 100%
    );
  }

  .info {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 10px;
    align-items: center;
    color: #fff;

    .city {
      color: #fff;
    }
  }
`;
