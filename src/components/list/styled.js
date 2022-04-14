import styled from "styled-components";

export const TabelContainer = styled.div`
  width: 100%;

  margin-top: 50px;

  table {
    width: 100%;
    background-image: linear-gradient(
      to right bottom,
      ${(props) => props.theme.color.primary},
      ${(props) => props.theme.color.primary},
      ${(props) => props.theme.color.primary},
      ${(props) => props.theme.color.secondary}
    );
    border-radius: 5px;

    td,
    th {
      padding: 8px;
      color: ${(props) => props.theme.color.white};
      border: 1px solid ${(props) => props.theme.color.white};
    }
  }
`;
