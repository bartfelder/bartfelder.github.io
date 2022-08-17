import React from "react";
import PropTypes from "prop-types";
import StyledModalOverlay from "./StyledModalOverlay";
import StyledModalContainer from "./StyledModalContainer";
import StyledModalTitle from "./StyledModalTitle";
import StyledModalDate from "./StyledModalDate";
import StyledModalDescription from "./StyledModalDescription";
import StyledModalLongDescription from "./StyledModalLongDescription";
import StyledModalButton from "./StyledModalButton";
function InfoModal({ closeModal, title, date, description, longDescription }) {
  return (
    <StyledModalOverlay onClick={(e) => closeModal(e)}>
      <StyledModalContainer onClick={(e) => e.stopPropagation()}>
        <StyledModalTitle>{title}</StyledModalTitle>
        <StyledModalDate>{date}</StyledModalDate>
        <StyledModalDescription>{description}</StyledModalDescription>
        {longDescription && (
          <StyledModalLongDescription>
            {longDescription}
          </StyledModalLongDescription>
        )}
        <StyledModalButton onClick={(e) => closeModal(e)}>
          Close
        </StyledModalButton>
      </StyledModalContainer>
    </StyledModalOverlay>
  );
}

InfoModal.propTypes = {
  closeModal: PropTypes.func,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  longDescription: PropTypes.string,
};

export default InfoModal;
