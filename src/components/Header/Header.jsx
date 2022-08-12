import React from "react";
import PropTypes from "prop-types";
import Contacts from "../Contacts/Contacts";
import ProfileImage from "../ProfileImage/ProfileImage";
import styled from "styled-components";

const StyledName = styled.h1`
  color: #CCCCCC;
  text-align: right;
  margin-bottom: 5px;
`;

const StyledTitle = styled.h4`
  text-align: right;
  margin: 0;
`
function Header({ contactData }) {
  return (
    <>
      <div>
        <StyledName>{contactData.name}</StyledName>
        <StyledTitle>{contactData.title}</StyledTitle>
        <Contacts contactData={contactData.contactInfo} />
      </div>
      <ProfileImage />
    </>
  );
}

Header.propTypes = {
  contactData: PropTypes.array,
};

export default Header;
