import React from "react";
import PropTypes from "prop-types";
import Contact from "../Contact/Contact";
import uuid4 from "uuid4";
import styled from "styled-components";

const ContactsContainer = styled.div`
  grid-column: 5;
  text-align: right;
`;

const ContactsList = styled.ul`
  list-style: none;
  padding-inline-start: 10px;
`;
function Contacts({ contactData }) {
  console.log(contactData);
  return (
    <ContactsContainer>
      <ContactsList>
        {contactData.map((contact) => (
          <Contact {...contact} key={uuid4()} />
        ))}
      </ContactsList>
    </ContactsContainer>
  );
}

Contacts.propTypes = {
  contactData: PropTypes.array,
};

export default Contacts;
