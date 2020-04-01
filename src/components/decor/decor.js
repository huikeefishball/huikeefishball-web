import React, { useState } from "react"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

import style from "./decor.module.styl"

function getStyle(y, dampingValue) {
  return { transform: `translateY(${y / dampingValue}px)` }
}

export const DecorHeroLeft = () => {
  const [circle1Style, setCircle1Style] = useState({})
  const [circle2Style, setCircle2Style] = useState({})
  const [triangle1Style, setTriangle1Style] = useState({})
  const [triangle2Style, setTriangle2Style] = useState({})
  const [fish1Style, setFish1Style] = useState({})
  useScrollPosition(({ currPos: { y } }) => {
      requestAnimationFrame(() => {
        setCircle1Style(getStyle(y, 19))
        setCircle2Style(getStyle(y, 18))
        setTriangle1Style(getStyle(y, -17))
        setTriangle2Style(getStyle(y, -18))
        setFish1Style(getStyle(y, 10))  
      })
    },
    [
      circle1Style,
      circle2Style,
      triangle1Style,
      triangle2Style,
      fish1Style,
    ]
  )

  return (
    <svg className={`${style.root} ${style.left}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463.4 800" width="463.4">
      <foreignObject x="112.6" y="99.61" width="109.96" height="96.26" style={triangle1Style}>
        <div className={`${style.triangle} ${style.flipY}`} />
      </foreignObject>
      <foreignObject x="149.51" y="634.91" width="85.96" height="76.7" style={triangle2Style}>
        <div className={style.triangle} />
      </foreignObject>
      <foreignObject x="23.4" y="232.84" width="84.95" height="84.95" style={circle1Style}>
        <div className={style.circle} />
      </foreignObject>
      <foreignObject x="94.2" y="597" width="64.91" height="62.31" style={circle2Style}>
        <div className={`${style.circle} ${style.flipY}`} />
      </foreignObject>
      <foreignObject x="300.42" y="611.52" width="162.99" height="158.99" style={fish1Style}>
        <div className={style.fish1} />
      </foreignObject>
    </svg>
  )
}

export const DecorHeroRight = () => {
  const [circle1Style, setCircle1Style] = useState({})
  const [triangle1Style, setTriangle1Style] = useState({})
  const [triangle2Style, setTriangle2Style] = useState({})
  const [fish1Style, setFish1Style] = useState({})
  const [fish2Style, setFish2Style] = useState({})
  useScrollPosition(({ currPos: { y } }) => {
      requestAnimationFrame(() => {
        setCircle1Style(getStyle(y, 19))
        setTriangle1Style(getStyle(y, -17))
        setTriangle2Style(getStyle(y, -18))
        setFish1Style(getStyle(y, 10))
        setFish2Style(getStyle(y, -12))
      })
    },
    [
      circle1Style,
      triangle1Style,
      triangle2Style,
      fish1Style,
      fish2Style,
    ]
  )

  return (
    <svg className={`${style.root} ${style.right}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 503.65 800" width="503.65">
      <foreignObject x="286.85" y="57.7" width="79.45" height="150.22">
        <div className={style.fish3} style={style.fish1Style} />
      </foreignObject>
      <foreignObject y="585.78" width="157.08" height="70.22">
        <div className={style.fish2} style={style.fish2Style} />
      </foreignObject>
      <foreignObject x="217.56" y="484.83" width="126.45" height="112.16">
        <div className={style.triangle} style={style.triangle2Style} />
      </foreignObject>
      <foreignObject id="triangle1" x="158.75" y="100.15" width="63.22" height="56.08">
        <div className={style.triangle} style={style.triangle1Style} />
      </foreignObject>
      <foreignObject className={style.circle} style={circle1Style} x="308.86" y="410.07" width="126.45" height="126.27">
        <div className={style.circle} />
      </foreignObject>
    </svg>
  )
}

export const DecorAboutLeft = () => {
  const [triangle1Style, setTriangle1Style] = useState({})
  const [fish1Style, setFish1Style] = useState({})
  useScrollPosition(({ currPos: { y } }) => {
      requestAnimationFrame(() => {
        setTriangle1Style(getStyle(y, 17))
        setFish1Style(getStyle(y, -10))  
      })
    },
    [
      triangle1Style,
      fish1Style,
    ]
  )

  return (
    <svg className={`${style.root} ${style.left}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 865" width="300">
      <foreignObject x="51" y="637" width="125" height="115" style={triangle1Style}>
        <div className={style.triangle} />
      </foreignObject>
      <foreignObject x="223" y="103" width="96" height="96" style={fish1Style}>
        <div className={style.fish1} style={{ transform: "rotate(-10deg) scale(0.9)" }} />
      </foreignObject>
    </svg>
  )
}

export const DecorAboutRight = () => {
  const [triangle1Style, setTriangle1Style] = useState({})
  const [fish1Style, setFish1Style] = useState({})
  useScrollPosition(({ currPos: { y } }) => {
      requestAnimationFrame(() => {
        setTriangle1Style(getStyle(y, 10))
        setFish1Style(getStyle(y, -15))  
      })
    },
    [
      triangle1Style,
      fish1Style,
    ]
  )

  return (
    <svg className={`${style.root} ${style.right}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 865" width="300">
      <foreignObject x="86" y="173" width="96" height="86" style={triangle1Style}>
        <div className={style.triangle} style={{ transform: "scaleY(-1)" }} />
      </foreignObject>
      <foreignObject x="140" y="681" width="142" height="142" style={fish1Style}>
        <div className={style.fish1} style={{ transform: "scaleX(-1)" }} />
      </foreignObject>
    </svg>
  )
}


export const DecorCertificationRight = () => {
  const [triangle1Style, setTriangle1Style] = useState({})
  const [fish1Style, setFish1Style] = useState({})
  useScrollPosition(({ currPos: { y } }) => {
      requestAnimationFrame(() => {
        setTriangle1Style(getStyle(y, 10))
        setFish1Style(getStyle(y, 15))  
      })
    },
    [
      triangle1Style,
      fish1Style,
    ]
  )

  return (
    <svg className={`${style.root} ${style.right}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 691 555" width="691">
      <foreignObject x="629" y="174" width="101" height="86" style={triangle1Style}>
        <div className={style.triangle} />
      </foreignObject>
      <foreignObject x="0" y="550" width="172" height="79" style={fish1Style}>
        <div className={style.fish2} />
      </foreignObject>
    </svg>
  )
}

export const DecorTeamLeft = () => {
  const [triangle1Style, setTriangle1Style] = useState({})
  const [fish1Style, setFish1Style] = useState({})
  useScrollPosition(({ currPos: { y } }) => {
      requestAnimationFrame(() => {
        setTriangle1Style(getStyle(y, -17))
        setFish1Style(getStyle(y, 20))  
      })
    },
    [
      triangle1Style,
      fish1Style,
    ]
  )

  return (
    <svg className={`${style.root} ${style.left}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 651" width="300">
      <foreignObject x="-50" y="300" width="136" height="116" style={triangle1Style}>
        <div className={style.triangle} />
      </foreignObject>
      <foreignObject x="150" y="213" width="96" height="96" style={fish1Style}>
        <div className={style.fish1} style={{ transform: "rotate(-10deg) scale(0.9)" }} />
      </foreignObject>
    </svg>
  )
}

export const DecorTeamRight = () => {
  const [triangle1Style, setTriangle1Style] = useState({})
  const [fish1Style, setFish1Style] = useState({})
  useScrollPosition(({ currPos: { y } }) => {
      requestAnimationFrame(() => {
        setTriangle1Style(getStyle(y, 22))
        setFish1Style(getStyle(y, -17))  
      })
    },
    [
      triangle1Style,
      fish1Style,
    ]
  )

  return (
    <svg className={`${style.root} ${style.right}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 371 652" width="371">
      <foreignObject x="0" y="95" width="136" height="116" style={triangle1Style}>
        <div className={style.triangle} style={{ transform: "scaleY(-1)" }} />
      </foreignObject>
      <foreignObject x="136" y="257" width="142" height="142" style={fish1Style}>
        <div className={style.fish1} style={{ transform: "scaleX(-1)" }} />
      </foreignObject>
    </svg>
  )
}
