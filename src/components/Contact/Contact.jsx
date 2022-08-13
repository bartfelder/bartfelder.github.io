import React from "react";
import PropTypes from "prop-types";
import StyledContactTitle from "./StyledContactTitle";
import StyledContactLink from "./StyledContactLink";

function Contact({ icon, title, url }) {
  return (
    <li>
      <StyledContactLink href={url}>
        <i className={icon.join(" ")} />
        <StyledContactTitle>{title}</StyledContactTitle>
      </StyledContactLink>
    </li>
  );
}

Contact.propTypes = {
  icon: PropTypes.array,
  url: PropTypes.string,
  title: PropTypes.string,
};

export default Contact;
