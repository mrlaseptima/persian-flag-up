import React from "react"
import "./footer.scss"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social">
          <a href="">
            <i className="icon-send"></i>
          </a>
          <a href="">
            <i className="icon-twitter"></i>
          </a>
        </div>
        <div className="love">
          تـــــــــقــدیــم بــــا ❤️ به فارسی زبان ها
        </div>
        <a href="" className="github">
          star on github
          <i className="icon-github"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
