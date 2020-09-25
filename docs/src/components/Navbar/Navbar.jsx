import React from "react"
import { NAVBAR_CONSTS } from "../../constants"
import "./navbar.scss"

const Navbar = () => {
  const { links, packageName } = NAVBAR_CONSTS
  const scrollTo = to => {
    document.querySelector(to) &&
      document.querySelector(to).scrollIntoView({
        behavior: "smooth",
      })
  }

  return (
    <nav>
      <div className="container">
        <ul className="menu">
          {links.map(link => (
            <li className="menu__item" key={link.id}>
              <button onClick={() => scrollTo(link.to)}>{link.title}</button>
            </li>
          ))}
        </ul>
        <h1 className="packageName">
          <a href={packageName.to} className="latin r">
            {packageName.title}
          </a>
        </h1>
      </div>
    </nav>
  )
}

export default Navbar
