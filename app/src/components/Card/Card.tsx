import React from "react";
import type { FC, ReactNode } from "react";

interface CardProps {
  text: string;

  children?: ReactNode;
}

const Card: FC<CardProps> = ({ text, children }) => {
  return (
    <div className="bg-primary-black text-center shadow-lg shadow-primary-black rounded-lg flex flex-col items-center justify-around text-white p-4 gap-4 md:h-32 md:w-90">
      <p className="text-md sm:text-lg">{text}</p>
      {children}
    </div>
  );
};

export default Card;
