import React from "react";
import PropTypes from "prop-types";
import "./InfoGroupHeader.css";

function InfoGroupHeader({ groupTitle }) {
  return (
    <div className="InfoGroupHeader-title">
      <h2>{groupTitle}</h2>
    </div>
  );
}

InfoGroupHeader.propTypes = {
  groupTitle: PropTypes.string,
}

export default InfoGroupHeader
