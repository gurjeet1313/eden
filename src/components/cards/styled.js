import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 12px;

  figure {
    img {
      width: 30px;
      height: 30px;
    }
  }

  h3 {
    font-size: 18px;
    margin: 15px 0 10px;
  }

  p {
    font-size: 15px;
    color: ${(props) => props.theme.color.darkGrey};
  }
`;
