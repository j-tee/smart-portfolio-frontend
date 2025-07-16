import { useContext } from 'react'
import './Contact.scss'
import { Fade } from 'react-awesome-reveal'
import SocialMedia from '@/components/socialMedia/SocialMedia'
import { illustration, contactInfo } from '@/portfolio'
// Update the import to use the correct file extension, e.g., .json
import email from '@/assets/lottie/email.json'
import DisplayLottie from '@/components/displayLottie/DisplayLottie'
import StyleContext from '@/contexts/StyleContext'
import type { StyleContextType } from '@/contexts/StyleContext'
import contactMailDark from '@/assets/images/contactMailDark.svg'

const Contact = () => {
  const { isDark } = useContext(StyleContext) as StyleContextType
  return (
    <Fade direction="up" duration={1000}>
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p className={isDark ? 'dark-mode contact-subtitle' : 'subTitle contact-subtitle'}>
              {contactInfo.subtitle}
            </p>
            <div className={isDark ? 'dark-mode contact-text-div' : 'contact-text-div'}>
              {contactInfo.number && (
                <>
                  <a className="contact-detail" href={`tel:${contactInfo.number}`}>
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a className="contact-detail-email" href={`mailto:${contactInfo.email_address}`}>
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img alt="Man working" src={contactMailDark} />
            )}
          </div>
        </div>
      </div>
    </Fade>
  )
}
export default Contact
