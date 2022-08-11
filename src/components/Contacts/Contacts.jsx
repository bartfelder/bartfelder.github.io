import React from "react";
import PropTypes from "prop-types";
import Contact from "../Contact/Contact";
import uuid4 from "uuid4";
import "./Contacts.css"

function Contacts({ contactData }) {

  console.log(contactData);
  return (
    <ul className="contacts-list">
      {contactData.map((contact) => (
        <Contact {...contact} key={uuid4()} />
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  contactData: PropTypes.array,
};

export default Contacts;
