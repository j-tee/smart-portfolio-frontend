import { useContext, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import emoji from 'react-easy-emoji'
import './Greeting.scss'
import landingPerson from '@/assets/lottie/landingPerson.json'
import DisplayLottie from '@/components/displayLottie/DisplayLottie'
import SocialMedia from '@/components/socialMedia/SocialMedia'
import Button from '@/components/button/Button'
import { illustration, greeting } from '@/portfolio'
import StyleContext from '@/contexts/StyleContext'
import type { StyleContextType } from '@/contexts/StyleContext'
import manOnTable from '@/assets/images/manOnTable.svg'
import resumePDF from './resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import PopupModal from '@/components/greeting/PopupModal'

const Greeting = () => {
  const { isDark } = useContext(StyleContext) as StyleContextType
   const [modalType, setModalType] = useState<null | 'Create' | 'Read' | 'Update' | 'Delete'>(null)
   
  if (!greeting.displayGreeting) {
    return null
  }

  const closeModal = () => setModalType(null)

  return (
    <Fade direction="up" duration={1000}>
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div className="button-greeting-div crud-icon-buttons">
                <button title="Create" onClick={() => setModalType('Create')} className="icon-button">
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <button title="Read" onClick={() => setModalType('Read')} className="icon-button">
              <FontAwesomeIcon icon={faEye} />
            </button>
            <button title="Update" onClick={() => setModalType('Update')} className="icon-button">
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button title="Delete" onClick={() => setModalType('Delete')} className="icon-button">
              <FontAwesomeIcon icon={faTrash} />
            </button>
              </div>
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
      <PopupModal title={`${modalType} Greeting`} isOpen={!!modalType} onClose={closeModal}>
        {modalType === 'Read' ? (
          <pre>{JSON.stringify(greeting, null, 2)}</pre>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              console.log(`${modalType} submitted`)
              closeModal()
            }}
          >
            <label>Greeting Title:</label>
            <input type="text" defaultValue={greeting.title} />
            <br />
            <label>Subtitle:</label>
            <input type="text" defaultValue={String(greeting.subTitle)} />
            <br />
            <button type="submit">{modalType}</button>
          </form>
        )}
      </PopupModal>
    </Fade>
  )
}
export default Greeting
