import React from "react";
import "./installation.scss";

const Installation = () => {
  return (
    <div className="installation" id="installation">
      <div className="container">
        <div className="install">
          <h2 className="heading-2 grouped">مراحل نصب پکیج</h2>
          <p className="desc-2 grouped">
            روش های نصب پکیج را در زیر مشاهده میکنید
          </p>
          <div className="box">
            <div>
              <h2 className="latin b ">CLI Command</h2>
              <p className="desc-2">
                شما میتوانید persian flag up رو با npm CLI به راحتی نصب نمایید
              </p>

              <code>
                <span className="color">npm install</span>
                persian-flag-up
              </code>

              <p className="desc-2">
                یا به عنوان جایگزین میتوانید از دستور Yarn CLI استفاده نمایید
              </p>
              <code>
                <div className="color">yarn add</div>
                persian-flag-up
              </code>
            </div>

            <div>
              <h2 className="latin b">CDN</h2>
              <p className="desc-2">
                با جایگذاری لینک زیر در script tag به راحتی از پیکیج استفاده
                نمایید
              </p>
              <code>
                {
                  "<script src='http://cdn.com/packages/persian-flag-up.js'></script>"
                }
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
