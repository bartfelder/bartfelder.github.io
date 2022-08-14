import React from "react";
import PropTypes from "prop-types";
import Contact from "../Contact/Contact";
import uuid4 from "uuid4";
import StyledContactsContainer from "./StyledContactsContainer";
import StyledContactsList from "./StyledContactsList";

function Contacts({ contactData }) {
  return (
    <StyledContactsContainer>
      <StyledContactsList>
        {contactData.map((contact) => (
          <Contact {...contact} key={uuid4()} />
        ))}
      </StyledContactsList>
    </StyledContactsContainer>
  );
}

Contacts.propTypes = {
  contactData: PropTypes.array,
};

export default Contacts;
