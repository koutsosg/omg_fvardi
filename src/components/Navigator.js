import React from "react";
import { OmgNavigator, LayoutSide } from "omgad-component/lib";
import { Home } from "../pages/Home";
import { People } from "../pages/People";
import { Firms } from "../pages/Firms";

import logo from "../assets/avatar2.jpg";
import overlay from "../assets/overlay.png";
import imgback from "../assets/1.jpg";
import ModalMain from "./Modal";

const website = {
  name: "Φωτεινή Βαρδή",
  url: "/",
  h1: "Φωτεινή Βαρδή",
  h2: "Διακεκριμένη Ασφαλιστική Σύμβουλος",
  p:
    "στην Εθνική Ασφαλιστική. Δραστηριοποιούμαι στην εταιρία από το 2002 και διαθέτω εξειδικευμένη εμπειρία στην αποτελεσματική διαχείριση κινδύνων...",
  quicklink: "",
  quicklinkt: "",
  modal: <ModalMain />,
};

const navLinks = [
  { to: "/", text: "ΑΡΧΙΚΗ" },
  {
    to: "/about",
    text: "ΥΠΗΡΕΣΙΕΣ ",
    submenu: [
      { text: "ΦΥΣΙΚΑ ΠΡΟΣΩΠΑ", to: "/φυσικά-πρόσωπα" },
      { text: "ΝΟΜΙΚΑ ΠΡΟΣΩΠΑ ", to: "/νομικά-πρόσωπα" },
    ],
  },
];

const links = [
  { to: "/", component: <Home /> },
  { to: "/φυσικά-πρόσωπα", component: <People /> },

  { to: "/νομικά-πρόσωπα", component: <Firms /> },
];

const slinks = [
  {
    icon: "facebook",
    url: "https://www.facebook.com/Foteini.Vardi/",
  },
  /*  {
    icon: "instagram",
    url: "/",
  }, */
  {
    icon: "linkedin",
    url: "https://www.linkedin.com/in/fotini-vardi-ba643a27",
  },
  {
    icon: "phone square",
    url: "tel:6936997712",
  },
  {
    icon: "whatsapp square",
    url: "https://wa.me/306936997712",
  },

  {
    icon: "at",
    url: "mailto:fotvardi@gmail.com",
  },
];

const classes = {
  headermain: "omg-sidebar_layout",
  headerin: "inner",
  avatarlink: "image avatar",
  avatarlogo: "",
  h1: "text-light h4",
  h2: "text-light h6",
  p: "h6 text-light",
  quicklink: "text-light App-link",
  footer: "innerfoot",
  sicon: "",
  siconl: "",
  circular: true /* true / false */,
  copyright: "text-white",
  copyrightl: "",
  children:
    "omg-layout_main text-center bg-light omg-layout_main_pad omg-layout_main_1280pad omg-layout_main_980pad omg-layout_main_736pad",
  menu: "w-100 m-0 ",
  menuitem: "px-4",
  menulink: "text-light justify-content-center",
  dropdown: "text-light  px-4 ",
  dropdownmenu: "w-100 omg-layout_dropitem justify-content-end ",
  droplink: "",
  dropitem: "",
};

export const Navigator = () => {
  return (
    <OmgNavigator
      links={links}
      container={(children) => (
        <LayoutSide
          website={website}
          logo={logo}
          classes={classes}
          slinks={slinks}
          imgback={imgback}
          overlay={overlay}
          links={navLinks}
        >
          {children}
        </LayoutSide>
      )}
    />
  );
};
