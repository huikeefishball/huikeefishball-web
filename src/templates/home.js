import React from "react"

import Layout from "../components/layout"

const HomePage = (props) => {
  const {
    language,
    siteMenu,
    pagePath,
    pageTitle,
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
  } = props.pageContext
  return (
    <Layout
      language={language}
      pagePath={pagePath}
      siteMenu={siteMenu}
    >
      <section id="slideshow">
        {slides.map(({ image: slide }) => (
          <img
            key={slide}
            src={slide}
            alt={pageTitle}
            role="presentation"
          />
        ))}
      </section>
      <section id="about">
        <div>
          <div>
            <p>{aboutUsQuoteContent}</p>
            <div>{aboutUsQuoteAuthor}</div>
          </div>
          <h2>{aboutUsTitle}</h2>
          {aboutUsContent.split('\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
      <section id="video" />
      <section id="certification">
        <div>
          <div>
            <h2>{certificationTitle}</h2>
            <p>{certificationContent}</p>
            <ul>
              {certifications.split('\n').map((cert, i) => (
                <li key={i}>{cert}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>{certificationQuoteContent}</p>
            <div>{certificationQuoteAuthor}</div>
          </div>
        </div>
      </section>
      <section id="team">
        <div>
          <div>
            <h2>{teamTitle}</h2>
            <p>{teamContent}</p>
          </div>
          <div>
            <p>{teamQuoteContent}</p>
            <div>{teamQuoteAuthor}</div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage
