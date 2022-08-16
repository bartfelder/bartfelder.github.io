import styled from "styled-components";

const StyledModalContainer = styled.div`
  background-color: ${(props) => props.theme.cardBackground};
  margin: 100px auto;
  padding: 20px;
  border: 1px ${(props) => props.theme.background} solid;
  border-radius: 20px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  width: 60%;
  height: 400px;
  display: grid;
  grid-template-rows: 5;
  grid-template-columns: 1;
`;

export default StyledModalContainer;
