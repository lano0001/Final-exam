import React from "react";
import type { FC } from "react";

interface HeaderTitleProps {
  text: string;
}

const HeaderTitle: FC<HeaderTitleProps> = ({ text }) => (
  <h1 className="my-5 text-3xl font-semibold">{text}</h1>
);

export default HeaderTitle;
