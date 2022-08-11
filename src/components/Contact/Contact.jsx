import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

function Contact({ icon, title, url }) {
  return (
    <li>
      <a href={url}>
        <i className={icon.join(" ")} />
        <p className="contact-title">{title}</p>
      </a>
    </li>
  );
}

Contact.propTypes = {
  icon: PropTypes.array,
  url: PropTypes.string,
  title: PropTypes.string,
};

export default Contact;
