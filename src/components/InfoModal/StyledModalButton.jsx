import styled from "styled-components";

const StyledModalButton = styled.button`
  align-self: end;
  background-color: ${(props) => props.theme.cardHighlight};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.textSecondary};
  font-weight: 900;
  height: 50px;
  justify-self: end;
  width: 100px;
`;

export default StyledModalButton;
