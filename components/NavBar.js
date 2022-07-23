import React, { useState, useEffect } from "react";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const slideVariant = {
  visible: { x: 0 },
  hidden: { x: 100 },
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOnMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isMenuOpen]);

  return (
    <header className="flex justify-between">
      <div className="p-3">
        <span className="text-xl font-semibold ">k.i.</span>
      </div>
      <div className="flex relative p-3">
        <MenuAlt3Icon
          className="h-7 w-7 cursor-pointer"
          tabIndex={0}
          onClick={handleOnMenuClick}
          onKeyDownCapture={(event) => {
            if (event.key === "Enter") {
              handleOnMenuClick();
            }
          }}
        />
        <motion.div
          className={`bg-cool-green flex flex-col items-center justify-center text-white text-3xl font-semibold absolute h-screen top-0 right-0 w-56 z-50 p-3 ${
            !isMenuOpen ? "hidden overflow-hidden" : ""
          }`}
          variants={slideVariant}
          animate={isMenuOpen ? "visible" : "hidden"}
        >
          <div className="flex flex-col gap-3">
            <a href="#about" onClick={handleOnMenuClick}>
              about
            </a>
            <a href="#skills" onClick={handleOnMenuClick}>
              skills
            </a>
            <a href="#projects" onClick={handleOnMenuClick}>
              projects
            </a>
            <a href="#contact" onClick={handleOnMenuClick}>
              contact
            </a>
          </div>

          <div
            className="mt-10"
            tabIndex={0}
            onClick={handleOnMenuClick}
            onKeyDownCapture={(event) => {
              if (event.key === "Enter") {
                handleOnMenuClick();
              }
            }}
          >
            <XIcon className="w-8" />
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default NavBar;
