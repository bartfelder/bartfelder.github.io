import styled from "styled-components";

const StyledInfoCardContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: span 5;
  grid-row: ${(props) => props.rowNumber};
  display: grid;
  grid-template-columns: repeat(3, 33%);
`;

export default StyledInfoCardContainer;
