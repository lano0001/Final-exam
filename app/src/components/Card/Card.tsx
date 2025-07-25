import React from "react";
import type { FC } from "react";

interface CardProps {
  text: string;
  icon: string;
}

const Card: FC<CardProps> = ({ text, icon }) => {
  return (
    <div className="bg-stone-900 flex flex-col md:flex-row items-center justify-around text-white p-4 gap-4 h-32">
      <img src={icon} alt="" className="h-7 w-7 md:h-auto md:w-auto" />
      <span className="text-xs sm:text-lg">{text}</span>
    </div>
  );
};

export default Card;
