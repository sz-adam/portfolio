import React, { useContext } from "react";
import Me4 from "../images/me44.png";
import { ThemeContext } from "../context/ThemeContext";
import CircleAnimation from "../framerMotion/CircleAnimation";

function Avatar() {
  const { selectedTheme } = useContext(ThemeContext);

  const strokeColor = selectedTheme.boxShadow.split(" ").pop();
  return (
    <div className="flex justify-center items-center pt-2 ">
      <div className="relative w-72 sm:w-96 lg:w-80">
        <img
          src={Me4}
          alt="my portfolio"
          className="w-full h-full object-cover rounded-full"
        />
       <CircleAnimation strokeColor={strokeColor}/>
      </div>
    </div>
  );
}

export default Avatar;
