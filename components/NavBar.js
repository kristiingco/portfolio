import React from "react";
import { MenuAlt3Icon } from "@heroicons/react/solid";

const NavBar = () => {
  return (
    <div className="flex justify-between p-3">
      <div>
        <span className="text-xl font-semibold">k.i.</span>
      </div>
      <div>
        <MenuAlt3Icon className="h-7 w-7" />
      </div>
    </div>
  );
};

export default NavBar;
