import { useContext } from 'react'
import './Podcast.scss'
import { Fade } from 'react-awesome-reveal'
import { podcastSection } from '../../portfolio'
import StyleContext from '../../contexts/StyleContext'
import type { StyleContextType } from '../../contexts/StyleContext'

const Podcast = () => {
  const { isDark } = useContext(StyleContext) as StyleContextType

  if (!podcastSection) console.error('podcastSection object for Podcast section is missing')

  if (!podcastSection.display) {
    return null
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p
            className={
              isDark ? 'dark-mode podcast-header-subtitle' : 'subTitle podcast-header-subtitle'
            }
          >
            {podcastSection.subtitle}
          </p>
        </div>
        <div className="podcast-main-div">
          {podcastSection.podcast.map((podcastLink, i) => {
            if (!podcastLink) {
              console.log(`Podcast link for ${podcastSection.title} is missing`)
            }
            return (
              <div key={i}>
                <iframe
                  className="podcast"
                  src={podcastLink}
                  frameBorder="0"
                  scrolling="no"
                  title="Podcast"
                />
              </div>
            )
          })}
        </div>
      </div>
    </Fade>
  )
}
export default Podcast
