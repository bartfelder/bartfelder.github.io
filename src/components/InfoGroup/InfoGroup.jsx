import React from "react";
import PropTypes from "prop-types";
import InfoCard from "../InfoCard/InfoCard";
import InfoGroupHeader from "../InfoGroupHeader/InfoGroupHeader";
import uuid4 from "uuid4";
import StyledInfoCardContainer from "./StyledInfoCardContainer";

const ROW_NUMBER_OFFSET = 3;

function InfoGroup({ groupTitle, groupContents, groupIndex }) {
  const rowNumber = groupIndex + ROW_NUMBER_OFFSET;

  return (
    <>
      <InfoGroupHeader groupTitle={groupTitle} rowNumber={rowNumber} />
      <StyledInfoCardContainer rowNumber={rowNumber}>
        {groupContents.map((content) => (
          <InfoCard {...content} key={uuid4()} />
        ))}
      </StyledInfoCardContainer>
    </>
  );
}

InfoGroup.propTypes = {
  groupTitle: PropTypes.string,
  groupContents: PropTypes.array,
  groupIndex: PropTypes.number,
};

export default InfoGroup;
