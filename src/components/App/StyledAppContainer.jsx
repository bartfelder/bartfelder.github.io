import styled from "styled-components";

const StyledAppContainer = styled.div`
  display: grid;
  column-gap: 5px;
  row-gap: 20px;
  grid-template-columns: 20% 10px repeat(4, 20%);
  grid-template-rows: 220px 10px repeat(${(props) => props.contentLength}, 1fr);
  max-width: 1080px;
`;

export default StyledAppContainer;
