import React from "react";
import { OmgNavigator, LayoutSide } from "omgad-component/lib";
import { Home } from "../pages/Home";

import { HealthFaqs } from "../pages/HealthFaqs";
import { RetirmentsFaqs } from "../pages/RetirmentsFaqs";
import Table from "../components/servicesinfo";
import logo from "../assets/avatar2.jpg";
import overlay from "../assets/overlay.png";
import imgback from "../assets/1.jpg";
import ModalMain from "./Modal";
import { Preefooter } from "./Prefooter";
import MessengerCustomerChat from "react-messenger-customer-chat";

const website = {
  name: "Φωτεινή Βαρδή",
  url: "/",
  h1: "Φωτεινή Βαρδή",
  h2: "Διακεκριμένη Ασφαλιστική Σύμβουλος",
  p: "στην Εθνική Ασφαλιστική. Δραστηριοποιούμαι στην εταιρία από το 2002 και διαθέτω εξειδικευμένη εμπειρία στην αποτελεσματική διαχείριση κινδύνων...",
  quicklink: "",
  quicklinkt: "",
  modal: <ModalMain />,
};

const navLinks = [
  { to: "/", text: "Αρχική" },
  /* {
    to: "/about",
    text: "ΥΠΗΡΕΣΙΕΣ ",
    submenu: [
      { text: "ΦΥΣΙΚΑ ΠΡΟΣΩΠΑ", to: "/φυσικά-πρόσωπα" },
      { text: "ΝΟΜΙΚΑ ΠΡΟΣΩΠΑ ", to: "/νομικά-πρόσωπα" },
    ],
  }, */
  { to: "/services", text: "Υπηρεσίες" },
  {
    to: "/about",
    text: "Χρήσιμες Ερωτήσεις",
    submenu: [
      { text: "Υγεία", to: "/ερωτήσεις-υγεία" },
      { text: "Σύνταξη", to: "/ερωτήσεις-σύνταξη" },
    ],
  },
];

const links = [
  { to: "/", component: <Home /> },
  { to: "/services", component: <Table /> },
  { to: "/ερωτήσεις-υγεία", component: <HealthFaqs /> },

  { to: "/ερωτήσεις-σύνταξη", component: <RetirmentsFaqs /> },
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
  sicon: "gray",
  siconl: "white",
  circular: true /* true / false */,
  copyright: "text-white",
  copyrightl: "",
  children:
    "d-flex flex-column h-100 omg-layout_main text-center bg-light omg-layout_main_pad omg-layout_main_1280pad omg-layout_main_980pad omg-layout_main_736pad",
  menu: "w-100 m-0 ",
  menuitem: "px-4",
  menulink: "text-light justify-content-center",
  dropdown: "text-light  px-4 ",
  dropdownmenu: "w-100 omg-layout_dropitem justify-content-end ",
  droplink: "",
  dropitem: "",
  contactli: "linksg",
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
          <div className="flex-fill">{children}</div>
          <Preefooter slinks={slinks} classes={classes} />
          <MessengerCustomerChat pageId="306526283400988" />
        </LayoutSide>
      )}
    />
  );
};
