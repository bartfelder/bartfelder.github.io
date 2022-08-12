import React from "react";
import PropTypes from "prop-types";
import InfoCard from "../InfoCard/InfoCard";
import InfoGroupHeader from "../InfoGroupHeader/InfoGroupHeader";
import uuid4 from "uuid4";
import styled from "styled-components";

const ROW_NUMBER_OFFSET = 3;

const InfoCardContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: span 5;
  grid-row: ${props => props.rowNumber};
  display: grid;
  grid-template-columns: repeat(3, 33%);
`;

function InfoGroup({ groupTitle, groupContents, groupIndex }) {
  const rowNumber = groupIndex + ROW_NUMBER_OFFSET;

  return (
    <>
      <InfoGroupHeader groupTitle={groupTitle} rowNumber={rowNumber} />
      <InfoCardContainer rowNumber={rowNumber}>
        {groupContents.map((content) => (
          <InfoCard {...content} key={uuid4()} />
        ))}
      </InfoCardContainer>
    </>
  );
}

InfoGroup.propTypes = {
  groupTitle: PropTypes.string,
  groupContents: PropTypes.array,
  groupIndex: PropTypes.number,
};

export default InfoGroup;
