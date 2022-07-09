import React from "react";

const CustomButton = ({ buttonText, styleType, Icon }) => {
  return (
    <button
      className={`flex justify-center items-center gap-1 text-sm ${
        styleType === "primary"
          ? " bg-cool-green text-white font-semibold"
          : "border-2 border-cool-green"
      } w-full p-2 rounded-md my-1`}
    >
      {buttonText} <Icon className="w-5 h-5" />
    </button>
  );
};

export default CustomButton;
