import React from "react";
import PropTypes from "prop-types";
import StyledModalOverlay from "./StyledModalOverlay";
import StyledModalContainer from "./StyledModalContainer";
function InfoModal({ closeModal }) {
  return (
    <StyledModalOverlay>
      <StyledModalContainer>
        <button onClick={(e) => closeModal(e)}>Close</button>
      </StyledModalContainer>
    </StyledModalOverlay>
  );
}

InfoModal.propTypes = {
  closeModal: PropTypes.func,
};

export default InfoModal;
