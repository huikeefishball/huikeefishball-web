import React, { useState } from "react"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

import style from "./decor.module.styl"

// import circle from "./circle.svg"
// import triangle from "./triangle.svg"
// import fishA from "./fish/a.svg"
// // import fishB from "./fish/b.svg"
// // import fishC from "./fish/c.svg"

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