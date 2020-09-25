import React from "react"
import "./contact.scss"
import PersianFlagUp from "../../../../../src/index"

import myProfile from "./../../../../public/images/profile1.jpg"
import hiradsProfile from "./../../../../public/images/profile2.jpg"
import hoseinsProfile from "./../../../../public/images/profile3.jpg"

const Contact = () => {
  return (
    <div className="contact example">
      <h2 className="example__title ">نمایش شماره تلفن</h2>
      <p className="example__description">
        چگونگی نمایش شماره تلفن ها را به راحتی تعیین کنید
      </p>
      <div className="card">
        <img src={myProfile} alt="محمد امین مسلمی" />
        <div className="info">
          <span className="name">محمد امین مسلمی</span>
          <span className="tel">
            {PersianFlagUp.formatPhone("09216870717", {
              shouldInsertCountryCode: true,
              toPersian: true,
              beautify: true,
            })}
          </span>
        </div>
        <div className="call-btn">
          <div className="icon-phone"></div>
        </div>
      </div>
      <div className="card">
        <img src={hiradsProfile} alt="هیراد ارشدی" />
        <div className="info">
          <span className="name">هیراد ارشدی</span>
          <span className="tel">
            {PersianFlagUp.formatPhone("09356782234", {
              shouldInsertCountryCode: true,
              toPersian: true,
              beautify: true,
            })}
          </span>
        </div>
        <div className="call-btn">
          <div className="icon-phone"></div>
        </div>
      </div>
      <div className="card">
        <img src={hoseinsProfile} alt="حسین شعبانی" />
        <div className="info">
          <span className="name">حسین شعبانی</span>
          <span className="tel">
            {PersianFlagUp.formatPhone("09112256897", {
              shouldInsertCountryCode: true,
              toPersian: true,
              beautify: true,
            })}
          </span>
        </div>
        <div className="call-btn">
          <div className="icon-phone"></div>
        </div>
      </div>
    </div>
  )
}

export default Contact
