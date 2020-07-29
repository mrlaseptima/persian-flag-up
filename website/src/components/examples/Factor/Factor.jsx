import React, { useState } from "react";
import "./factor.scss";
import PersianFlagUp from "../../../persianFlagUp/PersianFlagUp";

const Factor = () => {
  const [value, setValue] = useState(3500);
  const changePrice = e => {
    if (/^[0-9]*$/.test(e.target.value)) setValue(e.target.value);
  };

  const calcDiscount = val => {
    return (Number(val) * 80) / 100;
  };

  return (
    <div className="factor example">
      <h2 className="example__title ">فاکتور خرید</h2>
      <p className="example__description">
        قیمت فروش را به تومان وارد و فاکتور خود را مشاهده کنید
      </p>
      <label className="input">
        <input
          type="text"
          placeholder="قیمت فروش "
          value={value}
          onChange={changePrice}
        />
      </label>
      <div className="factor-ticket">
        <div className="right">
          <header>
            <h3>فاکتور خریدار</h3>
            <span>شماره : 1376</span>
          </header>
          <span>خریدار : محمد امین مسلمی</span>
          <span>
            قیمت فروش :
            <del>
              {PersianFlagUp.formatPrice(value, {
                suffix: "ریال",
                toRial: true,
                shouldInsertCommas: true
              })}
            </del>
          </span>
          <span>
            قیمت با تخفیف :{" "}
            {PersianFlagUp.formatPrice(calcDiscount(value), {
              suffix: "ریال",
              toRial: true,
              shouldInsertCommas: true
            })}
          </span>
        </div>
        <div className="left">
          <span>20%</span>
        </div>
      </div>
    </div>
  );
};
export default Factor;
