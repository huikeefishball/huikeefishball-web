import React, { useCallback } from "react"
import classnames from "classnames"

import style from "./sidebar.module.styl"

import FbIcon from  "../../assets/sidebar/fb.svg"
import MailIcon from  "../../assets/sidebar/mail.svg"
import TopIcon from  "../../assets/sidebar/top.svg"

export const Sidebar = (props) => {
  const {
    facebookLink,
    email,
    isShowGoToTop = false,
  } = props

  const onPressGoToTop = useCallback(() => {
    document.querySelector("body").scrollIntoView({ 
      behavior: "smooth" 
    })
  })

  return (
    <div
      className={classnames(style.sidebar, props.className)}
      style={props.style}
    >
      <ul className="list-reset">
        <li className={style.sidebarItem}>
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <img src={FbIcon} />
          </a>
        </li>
        <li className={style.sidebarItem}>
          <a href={`mailto:${email}`}>
            <img src={MailIcon} />
          </a>
        </li>
        {!!isShowGoToTop &&
          <li className={`${style.sidebarItem} ${style.gotoTop}`}>
            <button onClick={onPressGoToTop}>
              <img src={TopIcon} />
            </button>
          </li>
        }
      </ul>
    </div>
  )
}