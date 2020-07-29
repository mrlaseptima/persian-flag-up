import React, { useState } from "react";
import "./persianInput.scss";
import PersianFlagUp from "../../../persianFlagUp/PersianFlagUp";

const PersianInput = () => {
  const [value, setValue] = useState("");
  const checkChar = ({ target }) => {
    if (
      PersianFlagUp.isValid(target.value, {
        allowEmpty: true,
        type: "alphabet"
      })
    )
      setValue(target.value);
  };

  return (
    <div className="persian-input example">
      <h2 className="example__title ">اینپوت فارسی</h2>
      <p className="example__description">
        در اینپوت کاربر نمیتواند لاتین تایپ کند
      </p>

      <label className="input">
        <input
          type="text"
          value={value}
          placeholder="محمد امین مسلمی"
          onChange={checkChar}
        />
      </label>
    </div>
  );
};

export { PersianInput };
