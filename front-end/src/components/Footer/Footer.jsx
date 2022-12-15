import React from "react";
import { Outlet } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="link1">All</div>
      <div className="link1">WOMENS</div>
      <div className="link1">MENS</div>
      <div className="link1">KIDS</div>
      <Outlet />
    </div>
  );
};

export default Footer;
