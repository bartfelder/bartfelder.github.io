import styled from "styled-components";

const StyledModalContainer = styled.div`
  background-color: ${(props) => props.theme.cardBackground};
  margin: 20% auto;
  padding: 20px;
  border: 1px ${(props) => props.theme.background} solid;
  border-radius: 20px;
  box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
  width: 60%;
`;

export default StyledModalContainer;
