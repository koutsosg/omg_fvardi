import React from "react";
import { OmgNavigator, LayoutSide } from "omgad-component/lib";
import { Home } from "../pages/Home";
import { About } from "../pages/About";

const navLinks = [
  { to: "/", text: "Home" },
  {
    to: "/about",
    text: "About",
    submenu: [
      { text: "hello", to: "/" },
      { text: "world", to: "/about" },
    ],
  },
  {
    to: "/service",
    text: "Service",
    submenu: [
      { text: "hello", url: "/" },
      { text: "world", url: "/" },
    ],
  },
];

const links = [
  { to: "/", component: <Home /> },
  { to: "/about", component: <About /> },
];

const slinks = [
  {
    icon: "facebook",
    url: "/",
  },
  {
    icon: "instagram",
    url: "/",
  },
  {
    icon: "linkedin",
    url: "/",
  },
  {
    icon: "twitter",
    url: "/",
  },

  {
    icon: "at",
    url: "/",
  },
];

const classes = {
  headermain: "omg-sidebar_layout",
  headerin: "inner",
  avatarlink: "image avatar",
  avatarlogo: "",
  h: "text-light",
  p: "text-light",
  quicklink: "text-light App-link",
  footer: "innerfoot",
  sicon: "",
  siconl: "",
  circular: true /* true / false */,
  copyright: "",
  copyrightl: "",
  children:
    "omg-layout_main" /* omg-layout_main_pad omg-layout_main_1280pad omg-layout_main_736pad */,
  menu: "w-100 m-0 ",
  menuitem: "px-4",
  menulink: "text-light justify-content-center",
  dropdown: "text-light text-right px-0 ",
  dropdownmenu: "w-100 omg-layout_dropitem justify-content-end ",
  droplink: "text-right ",
  dropitem: "",
};

export const Navigator = () => {
  return (
    <OmgNavigator
      links={links}
      container={(children) => (
        <LayoutSide classes={classes} slinks={slinks} links={navLinks}>
          {children}
        </LayoutSide>
      )}
    />
  );
};
