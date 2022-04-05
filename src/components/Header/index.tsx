import { FC } from "react";
import { ComponentProps } from "./types";
import "./style.scss";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Header: FC<ComponentProps> = () => {
  return (
    <header className="header">
      <ArrowBackIosNewIcon className="header__arrow" />
      Merchant
    </header>
  );
};

export default Header;
