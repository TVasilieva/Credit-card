import { FC } from "react";
import { ComponentProps } from "./types";
import "./style.scss";

const Input: FC<ComponentProps> = ({
  type,
  placeholder,
  name,
  value,
  Icon,
}) => {
  return (
    <div className="input-container">
      <input
        type={type}
        className="input"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={() => {}}
      />
      {Icon}
    </div>
  );
};

export default Input;
