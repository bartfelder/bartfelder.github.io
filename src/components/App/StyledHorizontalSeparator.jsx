import styled from "styled-components";

const StyledHorizontalSeparator = styled.div`
  background-color: ${(props) => props.theme.cardBackground};
  grid-column-start: 1;
  grid-column-end: span 6;
  grid-row: 2;
`;

export default StyledHorizontalSeparator;
