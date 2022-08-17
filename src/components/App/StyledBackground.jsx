import styled from "styled-components";

const StyledBackground = styled.div`
  font-family: "Roboto", sans-serif;
  background-color: ${(props) => props.theme.background};
  width: 100%;
  margin: 0;
`;

export default StyledBackground;
