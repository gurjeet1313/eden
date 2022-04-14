import styled from "styled-components";

export const FormContainer = styled.div`
  margin-top: 40px;

  .congratulations {
    width: 80px;
    height: 65px;
    margin: 45px auto;
    img {
      width: 80px;
      height: 65px;
    }
  }
  .title {
    font-size: 32px;
    text-align: center;
    color: ${(props) => props.theme.color.black};
    margin-bottom: 5px;
  }

  .sub-title {
    font-size: 22px;
    text-align: center;
    margin-bottom: 20px;
    color: ${(props) => props.theme.color.black};
  }

  .radio-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    & > div {
      flex-basis: 45%;
      position: relative;
    }

    input {
      display: inline-block;
      appearance: none;
      width: 100%;
      height: 100%;
      position: absolute;
      border: 1px solid ${(props) => props.theme.color.darkGrey};

      &:checked {
        border: 1px solid ${(props) => props.theme.color.primary};
      }
    }

    .radio:hover input {
      border: 1px solid ${(props) => props.theme.color.primary};

      &:checked {
        border: 1px solid ${(props) => props.theme.color.primary};
      }
    }
  }
`;
