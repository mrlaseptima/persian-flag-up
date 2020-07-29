import React, { useLayoutEffect } from "react"

import "./Header.scss"

const Header = () => {
  useLayoutEffect(() => {
    ;(function () {
      // Init
      var container = document.querySelector("header"),
        inner = document.querySelector(".fluid__content")

      // Mouse
      var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function (event) {
          var e = event || window.event
          this.x = e.clientX - this._x
          this.y = (e.clientY - this._y) * -1
        },
        setOrigin: function (e) {
          this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2)
          this._y = e.offsetTop + Math.floor(e.offsetHeight / 2)
        },
        show: function () {
          return "(" + this.x + ", " + this.y + ")"
        },
      }

      // Track the mouse position relative to the center of the container.
      mouse.setOrigin(container)

      //-----------------------------------------

      var counter = 0
      var updateRate = 10
      var isTimeToUpdate = function () {
        return counter++ % updateRate === 0
      }

      //-----------------------------------------

      var onMouseEnterHandler = function (event) {
        update(event)
      }

      var onMouseLeaveHandler = function () {
        inner.style = ""
      }

      var onMouseMoveHandler = function (event) {
        if (isTimeToUpdate()) {
          update(event)
        }
      }

      //-----------------------------------------

      var update = function (event) {
        mouse.updatePosition(event)
        updateTransformStyle(
          (mouse.y / inner.offsetHeight / 3).toFixed(3),
          (mouse.x / inner.offsetWidth / 3).toFixed(2)
        )
      }

      var updateTransformStyle = function (x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)"
        inner.style.transform = style
        inner.style.webkitTransform = style
        inner.style.mozTransform = style
        inner.style.msTransform = style
        inner.style.oTransform = style
      }

      //-----------------------------------------

      container.onmouseenter = onMouseEnterHandler
      container.onmouseleave = onMouseLeaveHandler
      container.onmousemove = onMouseMoveHandler
    })()
  })

  return (
    <header className="header" id="header">
      <div className="container">
        <div className="fluid">
          <div className="fluid__content">
            <img src="images/logo.svg" alt="logo" />
            <h1 className="headingPrimary">Persian Flag Up</h1>
            <h2 className="headingSecondary">
              یه پکیج کامل برای هرکی که زیر پرچم ایرانه
            </h2>

            <a href="/">
              <span>GithHub</span>
              <i className="icon-github"></i>
            </a>
          </div>
        </div>
      </div>
      <svg id="border-bottom" viewBox="0 0 1900 100" preserveAspectRatio="none">
        <path
          fill="#FCFCFD"
          d="M -10 100 C 633 5 1266 5  1910 100 Z"
          stroke-width="2"
        ></path>
      </svg>
    </header>
  )
}

export default Header
