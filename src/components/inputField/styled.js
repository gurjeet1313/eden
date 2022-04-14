import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding: 12px 0 12px 5px;
    border: 2px solid ${(props) => props.theme.color.grey};
    border-radius: 5px;
    font-size: 15px;
  }

  .field-title {
    font-size: 15px;
    font-weight: 600;
    margin: 25px 0 5px;
    display: inline-block;
  }
`;

export const UrlContainer = styled.div`
  .field-title {
    font-size: 15px;
    font-weight: 600;
    margin: 25px 0 5px;
    display: inline-block;

    span {
      color: ${(props) => props.theme.color.grey};
      font-weight: 600;
    }
  }

  .field-wrap {
    display: flex;
    justify-content: flex-start;

    label {
      flex-basis: 30%;
      padding: 12px 0 12px 5px;
      display: inline-block;
      background-color: ${(props) => props.theme.color.lightGrey};
      color: ${(props) => props.theme.color.darkGrey};
      border-top: 2px solid ${(props) => props.theme.color.grey};
      border-bottom: 2px solid ${(props) => props.theme.color.grey};
      border-left: 2px solid ${(props) => props.theme.color.grey};
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    input {
      flex-basis: 70%;
      padding: 12px 0 12px 5px;
      border: 2px solid ${(props) => props.theme.color.grey};
      font-size: 15px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`;
