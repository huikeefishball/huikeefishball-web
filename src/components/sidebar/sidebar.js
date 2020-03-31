import React from "react"
import classnames from "classnames"

import style from "./sidebar.module.styl"

import FbIcon from  "../../assets/sidebar/fb.svg"
import MailIcon from  "../../assets/sidebar/mail.svg"
import TopIcon from  "../../assets/sidebar/top.svg"

const onPressGoToTop = () => {
  document.querySelector("body").scrollIntoView({ 
    behavior: "smooth" 
  })
}

export const Sidebar = (props) => {
  const {
    facebookLink,
    email,
    isShowGoToTop = false,
  } = props

  return (
    <div
      className={classnames(style.sidebar, props.className)}
      style={props.style}
    >
      <ul className="list-reset">
        <li className={style.sidebarItem}>
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <img src={FbIcon} alt={facebookLink} />
          </a>
        </li>
        <li className={style.sidebarItem}>
          <a href={`mailto:${email}`}>
            <img src={MailIcon} alt={email} />
          </a>
        </li>
        {!!isShowGoToTop &&
          <li className={`${style.sidebarItem} ${style.gotoTop}`}>
            <button onClick={onPressGoToTop}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img src={TopIcon} role="presentation" />
            </button>
          </li>
        }
      </ul>
    </div>
  )
}