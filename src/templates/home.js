import React from "react"

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
  return (
    <Layout {...restProps}>
      <section id="slideshow">
        {slides.map(({ image: slide }) => (
          <img
            key={slide}
            src={slide}
            alt={restProps.pageTitle}
            role="presentation"
          />
        ))}
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
