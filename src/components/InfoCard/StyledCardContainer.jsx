import styled from "styled-components";

const StyledCardContainer = styled.div`
  background-color: ${(props) => props.theme.cardBackground};
  border: 1px ${(props) => props.theme.background} solid;
  flex-grow: 1;
  padding: 15px;
  transition: 500ms;
  &:hover {
    background-color: ${(props) => props.theme.cardHighlight};
  }
`;

export default StyledCardContainer;
