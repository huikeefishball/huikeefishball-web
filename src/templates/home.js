import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import Swiper from "swiper"

import style from "./home.module.styl"

import { Quote } from "../components/quote"
import { Layout } from "../components/layout"

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
    ...restProps
  } = props.pageContext
  let swiper
  useEffect(() => {
    swiper = new Swiper(`.${style.swiper}`, {
      loop: true,
      pagination: {
        el: `.${style.swiperPagination}`,
        bulletClass: `${style.swiperPaginationBullet}`,
        bulletActiveClass: `${style.swiperPaginationBulletActive}`
      },
    })
  })
  return (
    <Layout {...restProps}>
      <Helmet>
        <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css" />
      </Helmet>
      <section id="slideshow">
        <div className={style.swiper}>
          <div className="swiper-wrapper">
            <div className="swiper-slide dummy" />
            {slides.map(({ image: slide }) => (
              <img
                key={slide}
                className="swiper-slide"
                src={slide}
                alt={restProps.pageTitle}
                role="presentation"
              />
            ))}
          </div>
          <div className={style.swiperPagination} />
        </div>
      </section>
      <section id="about" className={style.about}>
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
      <section id="video" className={style.video}>
        <video loop={true} muted={true} autoPlay={true}>
          <source src="/images/uploads/home.mp4" type="video/mp4" />
        </video>
      </section>
      <section id="certification" className={style.certification}>
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
