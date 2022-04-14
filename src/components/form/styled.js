import styled from "styled-components";

export const MainForm = styled.div`
  width: 40%;
  margin: 0 auto;

  @media (max-width: ${(props) => props.theme.breakpoints[4]}) {
    width: 50%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints[0]}) {
    width: 100%;
  }
`;
export const FormButton = styled.button`
  width: 100%;
  padding: 10px 0;
  display: inline-block;
  text-align: center;
  outline: none;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};
  border: 0;
  font-size 18px;
  margin-top: 25px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.color.primary}

  &:hover {
    color: ${(props) => props.theme.color.white}
  }

  &:disabled,
  &[disabled] {
    cursor: no-drop; 
    opacity: 0.8;
  }
`;
