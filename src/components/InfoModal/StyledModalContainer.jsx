import styled from "styled-components";

const StyledModalContainer = styled.div`
  background-color: ${(props) => props.theme.cardBackground};
  margin: 15% auto;
  padding: 20px;
  border: 1px ${(props) => props.theme.background} solid;
  width: 80%;
`;

export default StyledModalContainer;
