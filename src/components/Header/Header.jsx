import React from "react";
import PropTypes from "prop-types";
import Contacts from "../Contacts/Contacts";
import ProfileImage from "../ProfileImage/ProfileImage";
import "./Header.css"

function Header({ contactData }) {
  return (<>
    <h1>Csaba Bártfai</h1>
    <header className="header-container">
      <div className="header-links"><Contacts contactData={contactData} /></div>
      <div className="header-image"><ProfileImage /></div>
    </header>
    </>
  );
}

Header.propTypes = {
  contactData: PropTypes.array,
}

export default Header;
