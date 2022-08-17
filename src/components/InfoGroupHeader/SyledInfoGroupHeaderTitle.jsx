import styled from "styled-components";

const SyledInfoGroupHeaderTitle = styled.h2`
  color: ${(props) => props.theme.textPrimary};
  grid-column: 1;
  grid-row-start: ${(props) => props.rowNumber};
  text-align: right;
`;

export default SyledInfoGroupHeaderTitle;
