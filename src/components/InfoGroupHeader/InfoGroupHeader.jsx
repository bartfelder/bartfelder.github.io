import React from "react";
import PropTypes from "prop-types";
import SyledInfoGroupHeaderTitle from "./SyledInfoGroupHeaderTitle";

function InfoGroupHeader({ groupTitle, rowNumber }) {
  return (
    <SyledInfoGroupHeaderTitle rowNumber={rowNumber}>
      {groupTitle}
    </SyledInfoGroupHeaderTitle>
  );
}

InfoGroupHeader.propTypes = {
  groupTitle: PropTypes.string,
  rowNumber: PropTypes.number,
};

export default InfoGroupHeader;
