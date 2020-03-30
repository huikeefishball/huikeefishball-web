import React from "react"

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
      <section id="about">
        <div className="container mx-auto">
          <div>
            <p className="h3 text-theme-yellow">{aboutUsQuoteContent}</p>
            <div>{aboutUsQuoteAuthor}</div>
          </div>
          <h2 className="h2 icon triangle">{aboutUsTitle}</h2>
          {aboutUsContent.split('\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
      <section id="video" />
      <section id="certification">
        <div className="container mx-auto">
          <div>
            <h2 className="h2 icon triangle">{certificationTitle}</h2>
            <p>{certificationContent}</p>
            <ul>
              {certifications.split('\n').map((cert, i) => (
                <li key={i}>{cert}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="h3 text-theme-yellow">{certificationQuoteContent}</p>
            <div>{certificationQuoteAuthor}</div>
          </div>
        </div>
      </section>
      <section id="team">
        <div className="container mx-auto">
          <div>
            <h2 className="h2 icon triangle">{teamTitle}</h2>
            <p>{teamContent}</p>
          </div>
          <div>
            <p className="h3 text-theme-yellow">{teamQuoteContent}</p>
            <div>{teamQuoteAuthor}</div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage
