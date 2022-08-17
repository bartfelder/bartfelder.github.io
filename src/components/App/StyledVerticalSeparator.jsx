import styled from "styled-components";

const StyledVerticalSeparator = styled.div`
  background-color: ${(props) => props.theme.cardHighlight};
  grid-column: 2;
  grid-row-start: 1;
  grid-row-end: span ${(props) => props.contentLength + 2};
`;

export default StyledVerticalSeparator;
