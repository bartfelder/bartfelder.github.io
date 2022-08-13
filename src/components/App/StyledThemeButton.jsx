import styled from "styled-components";

const StyledThemeButton = styled.button`
  border: none;
  border-radius: 10%;
  position: fixed;
  top: 100px;
  right: 100px;
  width: 100px;
  height: 50px;
  background-color: ${props => props.theme.cardHighlight};
  color:  ${props => props.theme.textSecondary};
`;

export default StyledThemeButton;
