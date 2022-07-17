import React from "react";
import { SocialIcon } from "react-social-icons";
import { v4 as uuidv4 } from "uuid";

const socialData = [
  "https://www.linkedin.com/in/kristianaingco/",
  "https://github.com/kristiingco",
  "mailto:kristiana.d.ingco@gmail.com",
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-cool-green text-white p-5 mt-10">
      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-2">
          {socialData.map((item) => {
            return (
              <SocialIcon
                key={uuidv4()}
                url={item}
                bgColor="#ffffff"
                target={"_blank"}
                style={{ width: "30px", height: "30px" }}
              />
            );
          })}
        </div>
        <span className="flex items-center text-sm text-center">
          &copy; {currentYear}, Kristiana Ingco. Made with Next.js
          <SocialIcon
            url="https://github.com/kristiingco/portfolio"
            fgColor="#ffffff"
            bgColor="none"
            target={"_blank"}
            style={{ width: "30px", height: "30px" }}
          />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
