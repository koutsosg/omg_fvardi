import React from "react";
import Persons from "../components/Persons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGavel } from "@fortawesome/free-solid-svg-icons";
const info = {
  header: "ΦΥΣΙΚΑ ΠΡΟΣΩΠΑ",
};

const icons = {
  icon1: faHeartbeat,
  icon2: faCoins,
  icon3: faUmbrella,
  icon4: faSchool,
  icon5: faShieldAlt,
  icon6: faHome,
  icon7: faGavel,
  size: "4x",
};
const modicons = {
  icon1: "heartbeat",
  icon2: "money bill alternate",
  icon3: "home",
  icon4: "child",
  icon5: "leanpub",
  icon6: "shield alternate",
  icon7: "law",
};

const services = [
  {
    title: "ΥΓΕΙΑ",
    sicon: (
      <FontAwesomeIcon icon={icons.icon1} size={icons.size} className="" />
    ),
    modtitle: "ΥΓΕΙΑ",
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
    title: "ΣΥΝΤΑΞΗ ",
    sicon: (
      <FontAwesomeIcon icon={icons.icon2} size={icons.size} className="" />
    ),
    modtitle: "ΣΥΝΤΑΞΗ ",
    modicon: modicons.icon2,
    modinside: (
      <p>
        aLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
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
    title: "ΚΑΤΟΙΚΙΑ  ",
    sicon: (
      <FontAwesomeIcon icon={icons.icon3} size={icons.size} className="" />
    ),
    modtitle: "ΚΑΤΟΙΚΙΑ  ",
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
    title: "ΠΡΟΣΤΑΣΙΑ ΟΙΚΟΓΕΝΕΙΑΣ ",
    sicon: (
      <FontAwesomeIcon icon={icons.icon4} size={icons.size} className="" />
    ),
    modtitle: "ΠΡΟΣΤΑΣΙΑ ΟΙΚΟΓΕΝΕΙΑΣ ",
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
    title: "ΣΠΟΥΔΕΣ ΠΑΙΔΙΩΝ ",
    sicon: (
      <FontAwesomeIcon icon={icons.icon5} size={icons.size} className="" />
    ),
    modtitle: "ΣΠΟΥΔΕΣ ΠΑΙΔΙΩΝ ",
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
  {
    title: "ΠΡΟΣΤΑΣΙΑ ΚΕΦΑΛΑΙΩΝ ",
    sicon: (
      <FontAwesomeIcon icon={icons.icon6} size={icons.size} className="" />
    ),
    modtitle: "ΠΡΟΣΤΑΣΙΑ ΚΕΦΑΛΑΙΩΝ ",
    modicon: modicons.icon6,
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
    title: "ΑΣΤΙΚΗ ΕΥΘΥΝΗ",
    sicon: (
      <FontAwesomeIcon icon={icons.icon7} size={icons.size} className="" />
    ),
    modtitle: "ΑΣΤΙΚΗ ΕΥΘΥΝΗ ΙΔΙΩΤΗ ",
    modicon: modicons.icon7,
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

export const People = () => {
  return <Persons info={info} services={services} classes={classes} />;
};
