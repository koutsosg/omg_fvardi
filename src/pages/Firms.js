import React from "react";
import Persons from "../components/Persons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faPeopleCarry } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons";

const info = {
  header: "ΝΟΜΙΚΑ ΠΡΟΣΩΠΑ",
};

const icons = {
  icon1: faUserTie,
  icon2: faBuilding,
  icon3: faPeopleCarry,
  icon4: faUsers,
  icon5: faPeopleArrows,
  size: "4x",
  /*   icon6: faHome,
  icon7: faGavel, */
};
const modicons = {
  icon1: "user",
  icon2: "building",
  icon3: "user circle",
  icon4: "users",
  icon5: "handshake outline",
  icon6: "shield alternate",
  icon7: "law",
};
const services = [
  {
    title: "ΕΛΕΥΘΕΡΟΙ ΕΠΑΓΓΕΛΜΑΤΙΕΣ",
    sicon: (
      <FontAwesomeIcon icon={icons.icon1} size={icons.size} className="" />
    ),
    modtitle: "ΑΣΦΑΛΙΣΗ ΕΛΕΥΘΕΡΩΝ ΕΠΑΓΓΕΛΜΑΤΙΩΝ",
    modicon: modicons.icon1,
    modinside: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    ),
  },
  {
    title: "ΕΠΙΧΕΙΡΗΣΗ ",
    sicon: (
      <FontAwesomeIcon icon={icons.icon2} size={icons.size} className="" />
    ),
    modtitle: "ΑΣΦΑΛΙΣΗ ΕΠΙΧΕΙΡΗΣΗΣ ",
    modicon: modicons.icon2,
    modinside: (
      <p>
        2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    ),
  },
  {
    title: "ΠΡΟΣΩΠΙΚΟ",
    sicon: (
      <FontAwesomeIcon icon={icons.icon3} size={icons.size} className="" />
    ),
    modtitle: "ΑΣΦΑΛΙΣΗ ΠΡΟΣΩΠΙΚΟΥ",
    modicon: modicons.icon3,
    modinside: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    ),
  },
  {
    title: "Δ/Σ ΚΑΙ ΣΤΕΛΕΧΟΙ",
    sicon: (
      <FontAwesomeIcon icon={icons.icon4} size={icons.size} className="" />
    ),
    modtitle: "ΑΣΤΙΚΗ ΕΥΘΥΝΗ Δ/Σ ΚΑΙ ΣΤΕΛΕΧΩΝ",
    modicon: modicons.icon4,
    modinside: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    ),
  },
  {
    title: "ΑΣΦΑΛΙΣΗ ΣΥΝΕΤΑΙΡΩΝ",
    sicon: (
      <FontAwesomeIcon icon={icons.icon5} size={icons.size} className="" />
    ),
    modtitle: "ΔΙΑΣΤΑΥΡΟΥΜΕΝΗ ΑΣΦΑΛΙΣΗ ΣΥΝΕΤΑΙΡΩΝ",
    modicon: modicons.icon5,
    modinside: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    ),
  },
];
const classes = {
  container: "",
  mainheader: "gray",
  row: "",
  col: " py-5",
  link: "",
  card: "m-auto p-2 cards",
  cardcontent: "text-center m-auto",
  cardheader: "p-2 btwline",
  modalcontent: "px-5",
};

export const Firms = () => {
  return <Persons info={info} services={services} classes={classes} />;
};
