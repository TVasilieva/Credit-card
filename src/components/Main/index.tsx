import { FC } from "react";
import Input from "../Input";
import { ComponentProps } from "./types";
import "./style.scss";

import FormControlLabel from "@mui/material/FormControlLabel";
import { IOSSwitch } from "./switchStyle";
import LockIcon from "@mui/icons-material/Lock";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Main: FC<ComponentProps> = () => {
  return (
    <main className="main">
      <div className="price">
        70.00 <div className="currency">eur</div>
      </div>
      <div className="info">Enter your billing info</div>
      <Input
        type="number"
        placeholder="Card Number"
        name=""
        value={""}
        Icon={<CreditCardIcon className="input-icon" />}
      />
      <div className="card-data">
        <Input
          type="text"
          placeholder="MM/YY"
          name=""
          value={""}
          Icon={<CalendarMonthIcon className="input-icon" />}
        />
        <Input
          type="password"
          placeholder="CVV"
          name=""
          value={""}
          Icon={<LockIcon className="input-icon" />}
        />
      </div>
      <Input
        type="text"
        placeholder="Card Holder Name"
        name=""
        value={""}
        Icon={<PersonRoundedIcon className="input-icon" />}
      />
      <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label="Save card for future payments"
        className="switch"
      />
      <div className="card-list-up">
        <img alt="visa" src={require("../../assets/visa.png")} />
        <img alt="visa" src={require("../../assets/visa.png")} />
        <img
          alt="mastercard"
          src={require("../../assets/mastercard.png")}
          style={{ width: "50px", height: "50px" }}
        />
        <img
          alt="mastercard"
          src={require("../../assets/mastercard.png")}
          style={{ width: "50px", height: "50px" }}
        />
        <img
          alt="mir"
          src={require("../../assets/mir.png")}
          style={{ width: "55px", height: "30px" }}
        />
        <img
          alt="mir"
          src={require("../../assets/mir.png")}
          style={{ width: "55px", height: "30px" }}
        />
      </div>
      <button className="pay-btn">Pay</button>
      <div className="card-list-down">
        <img alt="visa" src={require("../../assets/visa.png")} />
        <img
          alt="mastercard"
          src={require("../../assets/mastercard.png")}
          style={{ width: "50px", height: "50px" }}
        />
        <img
          alt="mir"
          src={require("../../assets/mir.png")}
          style={{ width: "55px", height: "30px" }}
        />
      </div>
      <div className="language">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          className="language-input"
          options={["English", "Русский"]}
          sx={{ width: 150 }}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </main>
  );
};

export default Main;
