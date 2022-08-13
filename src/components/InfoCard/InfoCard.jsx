import React from "react";
import PropTypes from "prop-types";
import StyledCardContainer from "./StyledCardContainer";
import StyledCardTitle from "./StyledCardTitle";
import StyledCardDate from "./StyledCardDate";
import StyledCardDescription from "./StyledCardDescription";

function InfoCard({ title, date, description }) {
  return (
    <StyledCardContainer>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardDate>{date}</StyledCardDate>
      <StyledCardDescription>{description}</StyledCardDescription>
    </StyledCardContainer>
  );
}

InfoCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
};
export default InfoCard;
