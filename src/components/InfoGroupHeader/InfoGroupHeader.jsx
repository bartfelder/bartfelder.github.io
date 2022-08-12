import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const InfoGroupHeaderTitle = styled.h2`
  color: #CCCCCC;
  grid-column: 1;
  grid-row-start: ${props => props.rowNumber};
  text-align: right;
`;
function InfoGroupHeader({ groupTitle, rowNumber }) {
  return (
      <InfoGroupHeaderTitle rowNumber={rowNumber}>{groupTitle}</InfoGroupHeaderTitle>
  );
}

InfoGroupHeader.propTypes = {
  groupTitle: PropTypes.string,
  rowNumber: PropTypes.number,
}

export default InfoGroupHeader
