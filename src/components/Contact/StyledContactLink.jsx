import styled from "styled-components";

const StyledContactLink = styled.a`
  color: ${(props) => props.theme.cardHighlight};
  &:link,
  &:visited,
  &:active {
    text-decoration: none;
  }
`;

export default StyledContactLink;
