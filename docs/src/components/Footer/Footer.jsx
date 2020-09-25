import React from "react"
import "./footer.scss"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social">
          <a href="https://telegram.me/mrlaseptima">
            <i className="icon-send"></i>
          </a>
          <a href="https://twitter.com/mrlaseptima">
            <i className="icon-twitter"></i>
          </a>
        </div>
        <div className="love">
          تـــــــــقــدیــم بــــا ❤️ به فارسی زبان ها
        </div>
        <a
          href="https://github.com/mrlaseptima/persian-flag-up"
          className="github"
        >
          visit github
          <i className="icon-github"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
