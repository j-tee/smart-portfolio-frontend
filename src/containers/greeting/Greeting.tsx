import { useContext } from 'react'
import { Fade } from 'react-awesome-reveal'
import emoji from 'react-easy-emoji'
import './Greeting.scss'
import landingPerson from '../../assets/lottie/landingPerson.json'
import DisplayLottie from '../../components/displayLottie/DisplayLottie'
import SocialMedia from '../../components/socialMedia/SocialMedia'
import Button from '../../components/button/Button'
import { illustration, greeting } from '../../portfolio'
import StyleContext from '../../contexts/StyleContext'
import type { StyleContextType } from '../../contexts/StyleContext'
import resumePDF from './resume.pdf'
import manOnTable from '../../assets/images/manOnTable.svg'

const Greeting = () => {
  const { isDark } = useContext(StyleContext) as StyleContextType
  if (!greeting.displayGreeting) {
    return null
  }
  return (
    <Fade direction="up" duration={1000}>
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={isDark ? 'dark-mode greeting-text' : 'greeting-text'}>
                {' '}
                {greeting.title} <span className="wave-emoji">{emoji('👋')}</span>
              </h1>
              <p className={isDark ? 'dark-mode greeting-text-p' : 'greeting-text-p subTitle'}>
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div" />
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button text="Download my resume" href={resumePDF} download="Resume.pdf" />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img alt="man sitting on table" src={manOnTable} />
            )}
          </div>
        </div>
      </div>
    </Fade>
  )
}
export default Greeting
