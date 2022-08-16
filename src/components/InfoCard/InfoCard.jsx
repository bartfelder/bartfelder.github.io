import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledCardContainer from "./StyledCardContainer";
import StyledCardTitle from "./StyledCardTitle";
import StyledCardDate from "./StyledCardDate";
import StyledCardDescription from "./StyledCardDescription";
import InfoModal from "../InfoModal/InfoModal";

function InfoCard({ title, date, description, longDescription }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <StyledCardContainer onClick={openModal}>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardDate>{date}</StyledCardDate>
      <StyledCardDescription>{description}</StyledCardDescription>
      {isModalOpen && (
        <InfoModal
          closeModal={closeModal}
          title={title}
          date={date}
          description={description}
          longDescription={longDescription}
        />
      )}
    </StyledCardContainer>
  );
}

InfoCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  longDescription: PropTypes.string,
};
export default InfoCard;
