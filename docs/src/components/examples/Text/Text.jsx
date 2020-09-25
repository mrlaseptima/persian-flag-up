import React from "react"
import PersianFlagUp from "../../../../../src/index"
import "./text.scss"

const Text = () => {
  return (
    <div className="text example">
      <div className="after">
        این یک متن ساده با اعدادی غیر فارسی همانند
        <b>1234567890</b>
        میباشد و این متن هم یک متن با حروف رایج عربی در زبان فارسی همانند
        <b>"ي"</b>
        میباشد
      </div>
      <div className="before">
        {PersianFlagUp.toPersianText(
          "این متن هم همان متن با همان اعداد غیر فارسی میباشد که با این پیکیج تبدیل به اعداد فارسی شده اند 1234567890 و همچنین این حرف رایج عربی 'ي' نیز تبدیل به حرفی فارسی شده است "
        )}
      </div>
    </div>
  )
}

export default Text
