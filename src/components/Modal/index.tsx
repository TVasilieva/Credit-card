import { FC } from "react";
import Portal from "../Portal";
import { ComponentProps } from "./types";
import "./style.scss";
import Header from "../Header";
import Main from "../Main";

const Modal: FC<ComponentProps> = ({ children }) => {
  return (
    <Portal>
      <div className="modal">
        <Header />
        <Main />
      </div>
    </Portal>
  );
};

export default Modal;
