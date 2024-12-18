import ProtoTypes from "prop-types";
import React from "react";
import { Outlet } from "react-router-dom";
import FooterArea from "../../component/FooterArea";
import LogoArea from "../../component/LogoArea";
import MainMenu from "../../component/MainMenu";
import ScrollTopButton from "../ScrollTopButton";

const LayoutTheme1 = ({ children }) => {
  return (
    <div className="theme-1">
      <ScrollTopButton />
      <div className="border_black" />
      <LogoArea className="white_bg" />
      <MainMenu />
      <Outlet />
      {children}
      <FooterArea className="primay_bg" />
    </div>
  );
};
export default LayoutTheme1;

LayoutTheme1.propTypes = {
  children: ProtoTypes.node,
};
