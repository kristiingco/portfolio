import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import { MailIcon } from "@heroicons/react/solid";
import { UserIcon } from "@heroicons/react/solid";
import CustomButton from "./CustomButton";

const HeroBanner = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-4xl">hi, i&apos;m kristi.</h1>
        <div>
          <ul>
            <li>
              <CheckIcon className="text-cool-green h-4 w-4 inline" /> front end
              developer
            </li>
            <li>
              <CheckIcon className="text-cool-green h-4 w-4 inline" />{" "}
              technology lover
            </li>
            <li>
              <CheckIcon className="text-cool-green h-4 w-4 inline" /> lifelong
              learning enthusiast
            </li>
          </ul>
        </div>
        <div>
          <CustomButton
            buttonText={"contact me"}
            styleType="primary"
            Icon={MailIcon}
          />
          <CustomButton
            buttonText={"about me"}
            styleType="secondary"
            Icon={UserIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
