import React from "react";
import "./tabContent.scss";

const TabContent = ({ data }) => (
  <div className="tab-content">
    <h1>{data.title}</h1>

    <h2>توضیحات :</h2>
    <p>{data.description}</p>
    <div className="table">
      <h2>لیست پارامتر ها</h2>
      <div className="row">
        <div className="cell">پارامتر</div>
        <div className="cell">نوع داده</div>
        <div className="cell">مقدار پیشفرض</div>
      </div>
      {data.props.map(row => {
        return (
          <div className="row">
            <div className="cell">{row.name}</div>
            <div className="cell">{row.type}</div>
            <div className="cell">{row.default}</div>
          </div>
        );
      })}
    </div>
    {data.props.some(item => item.name === "options") && (
      <section className="options-table">
        <h3>ویژگی های options</h3>
        <div className="row">
          <div className="cell">ویژگی</div>
          <div className="cell">نوع داده</div>
          <div className="cell">مقدار پیشفرض</div>
          <div className="cell">توضیحات</div>
        </div>
        {data.props
          .find(item => item.name === "options")
          .options.map(property => (
            <div className="row">
              <div className="cell">{property.name}</div>
              <div className="cell">{property.type}</div>
              <div className="cell">{property.default}</div>
              <div className="cell">{property.description}</div>
            </div>
          ))}
      </section>
    )}
  </div>
);

export default TabContent;
