import React from "react";
import ProfilePic from "../../assets/me.jpg";
import "./ProfileImage.css";

function ProfileImage() {
  return <img src={ProfilePic} className="profileImage" alt="Profile picture" />;
}

export default ProfileImage;
