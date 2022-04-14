import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .head-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    margin-top: 45px;
    min-width: 350px;
    display: flex;
    width: 25%;
    justify-content: space-between;
    position: relative;

    @media (max-width: ${(props) => props.theme.breakpoints[2]}) {
      width: 80%;
    }

    @media (max-width: ${(props) => props.theme.breakpoints[0]}) {
      width: 100%;
      min-width: auto;
    }

    &:after,
    &:before {
      content: "";
      width: 100%;
      height: 1px;
      background-color: ${(props) => props.theme.color.grey};
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: -1;
    }

    &.container1:before {
      width: 20%;
    }
    &.container2:before {
      width: 50%;
    }
    &.container3:before {
      width: 80%;
    }
    &.container4:before {
      width: 100%;
    }

    &:before {
      background-color: ${(props) => props.theme.color.primary};
    }

    span {
      padding: 12px 18px;
      display: inline-block;
      border: 1px solid ${(props) => props.theme.color.grey};
      border-radius: 50%;
      background-color: ${(props) => props.theme.color.white};
      color: ${(props) => props.theme.color.black};
      z-index: 1;
    }

    li.active {
      span {
        background-color: ${(props) => props.theme.color.primary};
        border: 1px solid ${(props) => props.theme.color.primary};
        color: ${(props) => props.theme.color.white};
      }
    }
  }
`;
