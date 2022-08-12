import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #696969;
  border: 1px #424242 solid;
  flex-grow: 1;
  padding: 15px;
  transition: 500ms;
  &:hover {
    background-color: #999999;
  }
`;

const CardTitle = styled.h3`
  color: #cccccc;
`;

const CardDate = styled.p`
  color: #212121;
  font-style: italic;
`;

const CardDescription = styled.p`
  color: #212121;
  font-weight: 700;
`;
function InfoCard({ title, date, description }) {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardDate>{date}</CardDate>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
}

InfoCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
};
export default InfoCard;
