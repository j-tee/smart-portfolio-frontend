import { useContext } from 'react'
import './Footer.scss'
import { Fade } from 'react-awesome-reveal'
import emoji from 'react-easy-emoji'
import StyleContext from '../../contexts/StyleContext'
import type { StyleContextType } from '../../contexts/StyleContext'

const Footer = () => {
  const { isDark } = useContext(StyleContext) as StyleContextType
  return (
    <Fade direction="up" duration={1000}>
      <div className="footer-div">
        <p className={isDark ? 'dark-mode footer-text' : 'footer-text'}>
          {emoji('Made with ❤️ by DeveloperFolio Team')}
        </p>
        <p className={isDark ? 'dark-mode footer-text' : 'footer-text'}>
          Theme by{' '}
          <a href="https://github.com/saadpasta/developerFolio" target="_blank" rel="noreferrer">
            developerFolio
          </a>
        </p>
      </div>
    </Fade>
  )
}
export default Footer
