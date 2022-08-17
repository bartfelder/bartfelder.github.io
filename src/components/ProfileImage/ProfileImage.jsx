import React from "react";
import ProfilePic from "../../assets/me.jpg";
import StyledProfileImage from "./StyledProfileImage";

function ProfileImage() {
  return (
    <StyledProfileImage src={ProfilePic} alt="Profile picture" />
  );
}

export default ProfileImage;
