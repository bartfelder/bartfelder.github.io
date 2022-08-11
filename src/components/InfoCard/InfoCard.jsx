import React from "react";
import PropTypes from "prop-types";
import "./InfoCard.css";

function InfoCard ({title, date, description}) {
  return (
    <div className="infoCard-container">
      <h3 className="infoCard-title">{title}</h3>
      <p className="infoCard-date">{date}</p>
      <p className="infoCard-description">{description}</p>
    </div>
  )
}

InfoCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
}
export default InfoCard;
