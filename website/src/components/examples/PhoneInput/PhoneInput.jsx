import React, { useState } from "react";
import "./phoneinput.scss";
import PersianFlagUp from "../../../persianFlagUp/PersianFlagUp";

const PhoneInput = () => {
  const [value, setValue] = useState("09216870717");
  const [status, setStatus] = useState("valid");
  const checkChar = ({ target }) => {
    setValue(target.value);
    if (
      PersianFlagUp.isValid(target.value, { allowEmpty: false, type: "phone" })
    )
      setStatus("valid");
    else setStatus("unValid");
  };

  return (
    <div className="phone-input example">
      <h2 className="example__title ">شماره همراه</h2>
      <p className="example__description">شماره همراه خود را وارد نمایید</p>

      <div className="input">
        <input
          className={status}
          type="text"
          value={value}
          placeholder="شماره تلفن"
          onChange={checkChar}
        />
        <div className={`status ${status}`}>
          <i className={`icon-${status === "valid" ? "check" : "x"}`}></i>
        </div>
      </div>
    </div>
  );
};

export { PhoneInput };
