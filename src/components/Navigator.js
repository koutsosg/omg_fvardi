import React from "react";
import { LayoutSide, OmgNavigator } from "omgad-component/src/library";
import { Home } from "../pages/Home";
import { About } from "../pages/About";

const links = [
  { to: "/", component: <Home /> },
  { to: "/about", component: <About /> },
];

export const Navigator = () => {
  return (
    <OmgNavigator
      links={links}
      container={(children) => (
        <LayoutSide links={navLinks}>{children}</LayoutSide>
      )}
    />
  );
};
