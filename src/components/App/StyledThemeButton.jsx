import styled from "styled-components";

const StyledThemeButton = styled.button`
  border: none;
  border-radius: 5px;
  position: fixed;
  top: 100px;
  right: 50px;
  width: 100px;
  height: 50px;
  background-color: ${props => props.theme.cardHighlight};
  color:  ${props => props.theme.textSecondary};
  @media print {
    display: none;
  }
`;

export default StyledThemeButton;
