import React from "react";
import styled from "styled-components";
import ProfilePic from "../../assets/me.jpg";

const ProfileImg = styled.img`
  border-radius: 20%;
  max-height: 200px;
  grid-column-start: 5;
  grid-column-end: span 5;
  margin: auto;
`;

function ProfileImage() {
  return (
    <ProfileImg src={ProfilePic} alt="Profile picture" />
  );
}

export default ProfileImage;
