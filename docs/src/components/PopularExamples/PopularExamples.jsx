import React from "react";
import { Code } from "./../PrismCode/PrismCode";
import "./popularExaples.scss";
import { POPULAR_EXAMPLES_CONSTS } from "../../constants/popularExamplesConsts";

const PopularExamples = () => {
  return (
    <div className="popular-examples" id="examples">
      <h2 className="heading-2 grouped">مثال های کاربردی</h2>
      <p className="desc-2 grouped">
        در این بخش نمونه هایی از رایج ترین استفاده از پکیج را مشاهده میکنید
      </p>
      <div className="container">
        {POPULAR_EXAMPLES_CONSTS.map((example, i) => {
          return (
            <div key={i} className="example-row" id={example.id}>
              <div className="result">{example.component}</div>
              <div className="code">
                <Code className="example-code" language="javascript">
                  {example.code}
                </Code>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularExamples;
