import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSelector = ({ setIsOpen }) => {
  const { changedColor } = useContext(ThemeContext);

  const themeOptions = [
    {
      color: "black",
      className:
        "p-[15px] rounded-[50%] border-2 border-solid border-[rgb(131,131,131)] bg-[#0C1C29]",
    },
    {
      color: "blue",
      className:
        "p-[15px] rounded-[50%] border-2 border-solid border-[rgb(131,131,131)] bg-[#006B7F]",
    },
    {
      color: "green",
      className:
        "p-[15px] rounded-[50%] border-2 border-solid border-[rgb(131,131,131)] bg-[#8B4513]",
    },
  ];

  return (
    <div className=" flex flex-row ">
      {themeOptions.map((option) => (
        <div key={option.color} className="mx-6 cursor-pointer">
          <div
            className={option.className}
            onClick={() => {
              changedColor(option.color);
              setIsOpen(false)
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ThemeSelector;
