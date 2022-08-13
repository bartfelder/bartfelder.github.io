import React from "react";
import PropTypes from "prop-types";
import Contacts from "../Contacts/Contacts";
import ProfileImage from "../ProfileImage/ProfileImage";
import StyledHeaderName from "./StyledHeaderName";
import StyledHeaderTitle from "./StyledHeaderTitle";
function Header({ contactData }) {
  return (
    <>
      <div>
        <StyledHeaderName>{contactData.name}</StyledHeaderName>
        <StyledHeaderTitle>{contactData.title}</StyledHeaderTitle>
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
