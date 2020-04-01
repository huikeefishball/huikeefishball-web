import React, { useState } from "react"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

import style from "./decor.module.styl"

function getOffset(y, dampingValue) {
  return y / dampingValue
}

export const DecorHeroLeft = () => {
  const [circle1Offset, setCircle1Offset] = useState(0)
  const [circle2Offset, setCircle2Offset] = useState(0)
  const [triangle1Offset, setTriangle1Offset] = useState(0)
  const [triangle2Offset, setTriangle2Offset] = useState(0)
  const [fish1Offset, setFish1Offset] = useState(0)
  useScrollPosition(({ currPos: { y } }) => {
      requestAnimationFrame(() => {
        setCircle1Offset(getOffset(y, 19))
        setCircle2Offset(getOffset(y, 18))
        setTriangle1Offset(getOffset(y, -17))
        setTriangle2Offset(getOffset(y, -18))
        setFish1Offset(getOffset(y, 10))  
      })
    },
    [
      circle1Offset,
      circle2Offset,
      triangle1Offset,
      triangle2Offset,
      fish1Offset,
    ]
  )

  return (
    <svg className={`${style.root} ${style.left}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463.4 800" width="463.4">
      <foreignObject x="112.6" y={99.61 + triangle1Offset} width="109.96" height="96.26">
        <div className={`${style.triangle} ${style.flipY}`} />
      </foreignObject>
      <foreignObject x="149.51" y={634.91 + triangle2Offset}  width="85.96" height="76.7">
        <div className={style.triangle} />
      </foreignObject>
      <foreignObject x="23.4" y={232.84 + circle1Offset}  width="84.95" height="84.95">
        <div className={style.circle} />
      </foreignObject>
      <foreignObject x="94.2" y={597 + circle2Offset} width="64.91" height="62.31">
        <div className={`${style.circle} ${style.flipY}`} />
      </foreignObject>
      <foreignObject x="300.42" y={611.52 + fish1Offset}  width="162.99" height="158.99">
        <div className={`${style.fish1} no-desktop`} />
      </foreignObject>
    </svg>
  )
}

export const DecorHeroRight = () => {
  const [circle1Offset, setCircle1Offset] = useState(0)
  const [triangle1Offset, setTriangle1Offset] = useState(0)
  const [triangle2Offset, setTriangle2Offset] = useState(0)
  const [fish1Offset, setFish1Offset] = useState(0)
  const [fish2Offset, setFish2Offset] = useState(0)
  useScrollPosition(({ currPos: { y } }) => {
      requestAnimationFrame(() => {
        setCircle1Offset(getOffset(y, 19))
        setTriangle1Offset(getOffset(y, -17))
        setTriangle2Offset(getOffset(y, -18))
        setFish1Offset(getOffset(y, 10))
        setFish2Offset(getOffset(y, -12))
      })
    },
    [
      circle1Offset,
      triangle1Offset,
      triangle2Offset,
      fish1Offset,
      fish2Offset,
    ]
  )

  return (
    <svg className={`${style.root} ${style.right}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 503.65 800" width="503.65">
      <foreignObject x="286.85" y={57.7 + fish1Offset} width="79.45" height="150.22">
        <div className={style.fish3} />
      </foreignObject>
      <foreignObject y={585.78 + fish2Offset} width="157.08" height="70.22">
        <div className={style.fish2} />
      </foreignObject>
      <foreignObject x="217.56" y={484.83 + triangle2Offset} width="126.45" height="112.16">
        <div className={style.triangle} />
      </foreignObject>
      <foreignObject x="158.75" y={100.15 + triangle1Offset} width="63.22" height="56.08">
        <div className={style.triangle} />
      </foreignObject>
      <foreignObject x="308.86" y={410.07 + circle1Offset} width="126.45" height="126.27">
        <div className={`${style.circle} no-desktop`} />
      </foreignObject>
    </svg>
  )
}

export const DecorAboutLeft = () => {
  const [triangle1Offset, setTriangle1Offset] = useState(0)
  const [fish1Offset, setFish1Offset] = useState(0)
  useScrollPosition(({ currPos: { y } }) => {
      requestAnimationFrame(() => {
        setTriangle1Offset(getOffset(y, 17))
        setFish1Offset(getOffset(y, -10))  
      })
    },
    [
      triangle1Offset,
      fish1Offset,
    ]
  )

  return (
    <svg className={`${style.root} ${style.left} no-tablet`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 865" width="300">
      <foreignObject x="51" y={637 + triangle1Offset} width="125" height="115">
        <div className={style.triangle} />
      </foreignObject>
      <foreignObject x="223" y={103 + fish1Offset} width="96" height="96">
        <div className={style.fish1} style={{ transform: "rotate(-10deg) scale(0.9)" }} />
      </foreignObject>
    </svg>
  )
}

export const DecorAboutRight = () => {
  const [triangle1Offset, setTriangle1Offset] = useState(0)
  const [fish1Offset, setFish1Offset] = useState(0)
  useScrollPosition(({ currPos: { y } }) => {
      requestAnimationFrame(() => {
        setTriangle1Offset(getOffset(y, 10))
        setFish1Offset(getOffset(y, -20))  
      })
    },
    [
      triangle1Offset,
      fish1Offset,
    ]
  )

  return (
    <svg className={`${style.root} ${style.right} no-tablet`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 865" width="300">
      <foreignObject x="86" y={173 + triangle1Offset} width="96" height="86">
        <div className={style.triangle} style={{ transform: "scaleY(-1)" }} />
      </foreignObject>
      <foreignObject x="140" y={500 + fish1Offset} width="142" height="142">
        <div className={style.fish1} style={{ transform: "scaleX(-1)" }} />
      </foreignObject>
    </svg>
  )
}


export const DecorCertificationRight = () => {
  const [triangle1Offset, setTriangle1Offset] = useState(0)
  const [fish1Offset, setFish1Offset] = useState(0)
  useScrollPosition(({ currPos: { y } }) => {
      requestAnimationFrame(() => {
        setTriangle1Offset(getOffset(y, 10))
        setFish1Offset(getOffset(y, 15))  
      })
    },
    [
      triangle1Offset,
      fish1Offset,
    ]
  )

  return (
    <svg className={`${style.root} ${style.right} no-tablet`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 691 555" width="691">
      <foreignObject x="629" y={174 + triangle1Offset} width="101" height="86">
        <div className={style.triangle} />
      </foreignObject>
      <foreignObject x="0" y={550 + fish1Offset} width="172" height="79">
        <div className={style.fish2} />
      </foreignObject>
    </svg>
  )
}

export const DecorTeamLeft = () => {
  const [triangle1Offset, setTriangle1Offset] = useState(0)
  const [fish1Offset, setFish1Offset] = useState(0)
  useScrollPosition(({ currPos: { y } }) => {
      requestAnimationFrame(() => {
        setTriangle1Offset(getOffset(y, -17))
        setFish1Offset(getOffset(y, 20))  
      })
    },
    [
      triangle1Offset,
      fish1Offset,
    ]
  )

  return (
    <svg className={`${style.root} ${style.left} no-tablet`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 651" width="300">
      <foreignObject x="-50" y={300 + triangle1Offset} width="136" height="116">
        <div className={style.triangle} />
      </foreignObject>
      <foreignObject x="150" y={213 + fish1Offset} width="96" height="96">
        <div className={style.fish1} style={{ transform: "rotate(-10deg) scale(0.9)" }} />
      </foreignObject>
    </svg>
  )
}

export const DecorTeamRight = () => {
  const [triangle1Offset, setTriangle1Offset] = useState(0)
  const [fish1Offset, setFish1Offset] = useState(0)
  useScrollPosition(({ currPos: { y } }) => {
      requestAnimationFrame(() => {
        setTriangle1Offset(getOffset(y, 22))
        setFish1Offset(getOffset(y, -17))  
      })
    },
    [
      triangle1Offset,
      fish1Offset,
    ]
  )

  return (
    <svg className={`${style.root} ${style.right} no-tablet`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 371 652" width="371">
      <foreignObject x="0" y={95 + triangle1Offset} width="136" height="116">
        <div className={style.triangle} style={{ transform: "scaleY(-1)" }} />
      </foreignObject>
      <foreignObject x="136" y={257 + fish1Offset} width="142" height="142">
        <div className={style.fish1} style={{ transform: "scaleX(-1)" }} />
      </foreignObject>
    </svg>
  )
}

export const DecorStyle1Left = () => {
  const [triangleOffset, setTriangleOffset] = useState(0)
  const [circleOffset, setCircleOffset] = useState(0)
  useScrollPosition(({ currPos: { y } }) => {
      requestAnimationFrame(() => {
        setTriangleOffset(getOffset(y, -17))
        setCircleOffset(getOffset(y, 20))  
      })
    },
    [
      triangleOffset,
      circleOffset,
    ]
  )

  return (
    <svg className={`${style.root} ${style.left} no-tablet`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 600" width="300">
      <foreignObject x="-50" y={252 + circleOffset} width="96" height="96">
        <div className={style.circle} style={{ transform: "scaleY(-1)" }} />
      </foreignObject>
      <foreignObject x="64" y={440 + triangleOffset} width="120" height="110">
        <div className={style.triangle} style={{ transform: "scaleY(-1)" }} />
      </foreignObject>
    </svg>
  )
}

export const DecorStyle1Right = () => {
  const [triangleOffset, setTriangleOffset] = useState(0)
  const [circleOffset, setCircleOffset] = useState(0)
  const [fishOffset, setFishOffset] = useState(0)
  useScrollPosition(({ currPos: { y } }) => {
      requestAnimationFrame(() => {
        setTriangleOffset(getOffset(y, 17))
        setCircleOffset(getOffset(y, -24))  
        setFishOffset(getOffset(y, 18))  
      })
    },
    [
      triangleOffset,
      circleOffset,
      fishOffset,
    ]
  )

  return (
    <svg className={`${style.root} ${style.right} no-tablet`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 600" width="264">
      <foreignObject x="90" y={146 + circleOffset} width="72" height="72">
        <div className={style.circle} />
      </foreignObject>
      <foreignObject x="0" y={88 + triangleOffset} width="72" height="66">
        <div className={style.triangle} />
      </foreignObject>
      <foreignObject x="0" y={388 + fishOffset} width="145" height="145">
        <div className={style.fish1} />
      </foreignObject>
    </svg>
  )
}
