import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SocialMedia.scss'
import { socialMediaLinks } from '@/portfolio'
import {
  faFacebook,
  faGithub,
  faGitlab,
  faInstagram,
  faKaggle,
  faLinkedin,
  faMedium,
  faStackOverflow,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const socialMedia = () => {
  if (!socialMediaLinks.display) {
    return null
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          {/* <i className="fab fa-github" /> */}
          <FontAwesomeIcon icon={faGithub} size="1x" />
          <span />
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          {/* <i className="fab fa-linkedin-in" /> */}
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
          <span />
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          {/* <i className="fas fa-envelope" /> */}
          <FontAwesomeIcon icon={faEnvelope} size="1x" />
          <span />
        </a>
      ) : null}

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitLab Profile"
        >
          {/* <i className="fab fa-gitlab" /> */}
          <FontAwesomeIcon icon={faGitlab} size="1x" />
          <span />
        </a>
      ) : null}

      {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook Profile"
        >
          {/* <i className="fab fa-facebook-f" /> */}
          <FontAwesomeIcon icon={faFacebook} size="1x" />
          <span />
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
        >
          {/* <i className="fab fa-instagram" /> */}
          <FontAwesomeIcon icon={faInstagram} size="1x" />
          <span />
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter Profile"
        >
          <FontAwesomeIcon icon={faTwitter} size="1x" />
          <span />
        </a>
      ) : null}

      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className="icon-button medium"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Medium Profile"
        >
          {/* <i className="fab fa-medium" /> */}
          <FontAwesomeIcon icon={faMedium} size="1x" />
          <span />
        </a>
      ) : null}

      {socialMediaLinks.stackoverflow ? (
        <a
          href={socialMediaLinks.stackoverflow}
          className="icon-button stack-overflow"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Stack Overflow Profile"
        >
          <FontAwesomeIcon icon={faStackOverflow} size="1x" />
          <span />
        </a>
      ) : null}

      {socialMediaLinks.kaggle ? (
        <a
          href={socialMediaLinks.kaggle}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kaggle Profile"
        >
          <FontAwesomeIcon icon={faKaggle} size="1x" />
          <span />
        </a>
      ) : null}
    </div>
  )
}
export default socialMedia
