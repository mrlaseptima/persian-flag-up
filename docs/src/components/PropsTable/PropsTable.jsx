import React, { useState } from "react";
import "./propsTable.scss";
import { PROPS_TABLE_CONSTS } from "../../constants/propsTableConsts";
import TabContent from "./components/TabContent/TabContent";

const PropsTable = () => {
  const [data, setData] = useState(PROPS_TABLE_CONSTS[0].data);
  const [id, setId] = useState(0);
  const changeTab = (data, activeId) => {
    setData(data);
    setId(activeId);
  };

  return (
    <div className="props-table" id="documentation">
      <h2 className="heading-2 grouped">لیست ویژگی ها</h2>
      <p className="desc-2 grouped">
        در این بخش لیست کامل ویژگی های پکیج را مشاهده مینمایید
      </p>
      <div className="container">
        <div className="data">
          <TabContent data={data} />
        </div>
        <aside>
          {PROPS_TABLE_CONSTS.map(item => (
            <span
              className={`${item.id === id ? "active" : ""}`}
              onClick={() => changeTab(item.data, item.id)}
            >
              {item.tabName}
            </span>
          ))}
        </aside>
      </div>
    </div>
  );
};
export default PropsTable;
