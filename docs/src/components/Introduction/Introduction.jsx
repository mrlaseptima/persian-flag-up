import React from "react"
import { TweenLite, Circ } from "gsap"

import "./introduction.scss"
import { INTRODUCTION_CONSTS } from "../../constants"

const Introduction = ({ isMenuOpen }) => {
  const goTo = to => {
    TweenLite.to(window, 1, {
      scrollTo: { y: to },
      ease: Circ.easeOut,
    })
  }

  return (
    <div className="intro" id="intro">
      <div className="container">
        <div className={`menu ${isMenuOpen ? "active" : ""}`}>
          {INTRODUCTION_CONSTS.map(row => (
            <div className="row">
              {row.map(cell => (
                <div
                  className="item"
                  onKeyDown={() => goTo(cell.to)}
                  role="button"
                  tabIndex="0"
                  onClick={() => goTo(cell.to)}
                >
                  <h2 className="heading-2 grouped">{cell.title}</h2>
                  <p className="desc-2 grouped">{cell.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="illustration">
          <img src="images/illustration.svg" alt="website character" />
          <div className={`colorfull`}>
            <img src="images/illustration.svg" alt="website character" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
