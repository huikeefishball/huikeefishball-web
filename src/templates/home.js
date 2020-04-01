import React, { useEffect, useRef, useCallback, useState } from "react"
import { Helmet } from "react-helmet"
import YouTube from "react-youtube"
import classnames from "classnames"
import Swiper from "react-id-swiper";

import style from "./home.module.styl"

import {
  DecorHeroLeft,
  DecorHeroRight,
  DecorAboutLeft,
  DecorAboutRight,
  DecorCertificationRight,
  DecorTeamLeft,
  DecorTeamRight,
} from "../components/decor"
import { Quote } from "../components/quote"
import { Layout } from "../components/layout"

import logo from "../assets/logo.svg"

const HomePage = (props) => {
  const {
    slides,
    aboutUsTitle,
    aboutUsContent,
    aboutUsQuoteContent,
    aboutUsQuoteAuthor,
    certificationTitle,
    certificationContent,
    certifications,
    certificationQuoteContent,
    certificationQuoteAuthor,
    teamTitle,
    teamContent,
    teamQuoteContent,
    teamQuoteAuthor,
    videoCoverImage,
    videoYouTubeID,
    ...restProps
  } = props.pageContext

  const swiperParams = {
    loop: true,
    pagination: {
      el: `.${style.swiperPagination}`,
      bulletClass: `${style.swiperPaginationBullet}`,
      bulletActiveClass: `${style.swiperPaginationBulletActive}`,
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
  }

  const opts = {
    // https://developers.google.com/youtube/player_parameters
    playerVars: {
      autoplay: 1,
      loop: 1,
      muted: 1,
      controls: 0,
    },
  }

  const youtubeRef = useRef()
  const [isPlayingVideo, setIsPlayingVideo] = useState(false)
  const [isVideoMuted, setIsVideoMuted] = useState(true)

  const onYouTubeReady = useCallback(async (event) => {
    const yt = event.target
    await yt.mute()
    const isMuted = await yt.isMuted()
    setIsVideoMuted(isMuted)
    const isStopped = await yt.getPlayerState() !== 1
    setIsPlayingVideo(isStopped)
    if (isStopped) {
      yt.playVideo()
    }
  }, [isPlayingVideo])

  const onYouTubeStateChange = useCallback((event) => {
    setIsPlayingVideo(event.data === 1)
  }, [isPlayingVideo])

  const onPressPlayButton = () => {
    youtubeRef.current.internalPlayer.playVideo()
  }

  const onPressVolumeButton = async () => {
    const player = youtubeRef.current.internalPlayer
    const isMuted = await player.isMuted()
    if (isMuted) {
      player.unMute()
    } else {
      player.mute()
    }
    if (isVideoMuted !== isMuted) {
      setIsVideoMuted(isMuted)
    }
  }

  return (
    <Layout {...restProps}>
      <Helmet>
        <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css" />
      </Helmet>
      <section id="slideshow">
        <div className={style.swiper}>
          <div className={style.hero}>
            <DecorHeroLeft />
            <DecorHeroRight />
            <img className={style.logo} src={logo} alt={restProps.siteTitle} />
          </div>
          <Swiper {...swiperParams}>
            <div className={`${style.swiperSlide} swiper-slide dummy`} />
            {slides.map(({ image: slide }) => (
              <div
                key={slide}
                className={`${style.swiperSlide} swiper-slide`}
              >
                <img
                  src={slide}
                  alt={restProps.pageTitle}
                  role="presentation"
                />
              </div>
            ))}
          </Swiper>
        </div>
      </section>
      <section id="about" className={style.about}>
        <DecorAboutLeft />
        <DecorAboutRight />
        <div className="container mx-auto">
          <Quote
            text={aboutUsQuoteContent}
            author={aboutUsQuoteAuthor}
          />
          <h2 className="h1 icon triangle offset">{aboutUsTitle}</h2>
          {aboutUsContent.split('\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
      <section
        id="video"
        className={classnames(style.video, { [style.videoActive]: isPlayingVideo })}
        style={{ backgroundColor: "black" }}
      >
        <YouTube
          ref={youtubeRef}
          videoId={videoYouTubeID}
          opts={opts}
          onReady={onYouTubeReady}
          onStateChange={onYouTubeStateChange}
        />
        {!isPlayingVideo &&
          <React.Fragment>
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: "black",
                backgroundImage: `url(${videoCoverImage})`,
                backgroundSize: "cover",
              }}
            />
            <button
              className={style.playButton}
              onClick={onPressPlayButton}
            />
          </React.Fragment>
        }
        <button
          className={style.volumeButton}
          onClick={onPressVolumeButton}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{ fillRule: "evenodd" }}>
            <path d="M13,4.63,6.47,10.05H1.39A1.42,1.42,0,0,0,0,11.49V20.1a1.41,1.41,0,0,0,1.39,1.44H6.47L13,27a1.39,1.39,0,0,0,2.26-1.12V5.75A1.39,1.39,0,0,0,13,4.63ZM7,12.93a1.41,1.41,0,0,0,.87-.32l4.69-3.88V22.86L7.83,19A1.4,1.4,0,0,0,7,18.67H2.78V12.93Z" />
            {!isVideoMuted &&
              <path d="M21.28,19.09l3.19-3.29-3.19-3.29a1.45,1.45,0,0,1,0-2,1.34,1.34,0,0,1,2,0l3.19,3.29,3.19-3.29a1.35,1.35,0,0,1,2,0,1.45,1.45,0,0,1,0,2L28.4,15.8l3.19,3.29a1.46,1.46,0,0,1,0,2,1.37,1.37,0,0,1-2,0l-3.19-3.29-3.19,3.29a1.35,1.35,0,0,1-2,0A1.46,1.46,0,0,1,21.28,19.09Z" />
            }
          </svg>
        </button>
      </section>
      <section id="certification" className={style.certification}>
        <DecorCertificationRight />
        <div className="container mx-auto">
          <div>
            <h2 className="h1 icon triangle">{certificationTitle}</h2>
            <p className="indent">{certificationContent}</p>
            <ul className="list-reset indent">
              {certifications.split('\n').map((cert, i) => (
                <li key={i}>{cert}</li>
              ))}
            </ul>
          </div>
          <Quote
            text={certificationQuoteContent}
            author={certificationQuoteAuthor}
          />
        </div>
      </section>
      <section id="team" className={style.team}>
        <DecorTeamLeft />
        <DecorTeamRight />
        <div className="container mx-auto">
          <div>
            <h2 className="h1 icon triangle">{teamTitle}</h2>
            <p className="indent">{teamContent}</p>
          </div>
          <Quote
            text={teamQuoteContent}
            author={teamQuoteAuthor}
          />
        </div>
      </section>
    </Layout>
  )
}

export default HomePage
