import React from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../fbase";

const Profile = () => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    navigate("/", { replace: true });
  };
  return (
    <>
      <button onClick={onLogOutClick}>Sign out</button>
    </>
  );
};

export default Profile;
