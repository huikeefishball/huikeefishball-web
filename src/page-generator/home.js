const { createLocalizedPage } = require("./helper")

module.exports = async (params) => {
  await createLocalizedPage(params, (language) => {
    const {
      slides,
      about_us: {
        title: { [language]: aboutUsTitle },
        content: { [language]: aboutUsContent },
        quote: {
          content: { [language]: aboutUsQuoteContent },
          author: { [language]: aboutUsQuoteAuthor },
        },
      },
      video: {
        youtube_id: videoYouTubeID,
      },
      certification: {
        title: { [language]: certificationTitle },
        content: { [language]: certificationContent },
        certifications,
        quote: {
          content: { [language]: certificationQuoteContent },
          author: { [language]: certificationQuoteAuthor },
        },
      },
      team: {
        title: { [language]: teamTitle },
        content: { [language]: teamContent },
        quote: {
          content: { [language]: teamQuoteContent },
          author: { [language]: teamQuoteAuthor },
        },
      },
    } = params.pageData
    return {
      context: {
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
        videoYouTubeID,
      },
    }
  })
}
