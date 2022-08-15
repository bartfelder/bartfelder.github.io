import React from "react";
import PropTypes from "prop-types";
import StyledModalOverlay from "./StyledModalOverlay";
import StyledModalContainer from "./StyledModalContainer";
import StyledCardTitle from "../InfoCard/StyledCardTitle";
import StyledCardDate from "../InfoCard/StyledCardDate";
import StyledCardDescription from "../InfoCard/StyledCardDescription";
function InfoModal({ closeModal, title, date, description }) {
  return (
    <StyledModalOverlay onClick={(e) => closeModal(e)}>
      <StyledModalContainer onClick={(e) => e.stopPropagation()}>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardDate>{date}</StyledCardDate>
        <StyledCardDescription>{description}</StyledCardDescription>
        <button onClick={(e) => closeModal(e)}>Close</button>
      </StyledModalContainer>
    </StyledModalOverlay>
  );
}

InfoModal.propTypes = {
  closeModal: PropTypes.func,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
};

export default InfoModal;
