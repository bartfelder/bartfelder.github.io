import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ContactTitle = styled.p`
  display: inline;
  line-height: 2;
  padding-left: 10px;
`;

const ContactLink = styled.a`
  color: #999999;
  &:link,
  &:visited,
  &:active {
    text-decoration: none;
  }
`
function Contact({ icon, title, url }) {
  return (
    <li>
      <ContactLink href={url}>
        <i className={icon.join(" ")} />
        <ContactTitle>{title}</ContactTitle>
      </ContactLink>
    </li>
  );
}

Contact.propTypes = {
  icon: PropTypes.array,
  url: PropTypes.string,
  title: PropTypes.string,
};

export default Contact;
