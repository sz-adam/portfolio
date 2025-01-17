import React from "react";

function Availability({ link, icon: Icon, name }) {
  return (
    <div className="p-3 ">
      <a href={link} className="flex items-center text-center">
        <Icon className="text-xl animate-bounce" />
        <span className="ml-4">{name}</span>
      </a>
    </div>
  );
}

export default Availability;
