import { useContext, useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import emoji from 'react-easy-emoji'
import './Greeting.scss'
import landingPerson from '@/assets/lottie/landingPerson.json'
import DisplayLottie from '@/components/displayLottie/DisplayLottie'
import SocialMedia from '@/components/socialMedia/SocialMedia'
import CustomButton from '@/components/button/Button'
import { illustration } from '@/portfolio'
import StyleContext from '@/contexts/StyleContext'
import type { StyleContextType } from '@/contexts/StyleContext'
import manOnTable from '@/assets/images/manOnTable.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import PopupModal from '@/components/greeting/PopupModal'
import { Button, Col, Form, Row } from 'react-bootstrap'
import resumePDF from './resume.pdf'
import useAppDispatch from '@/app/hooks/useAppDispatch'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import type { Greetings } from '@/types/portfolio'
import { addGreeting, deleteGreeting, fetchGreeting, updateGreeting } from './greetingSlice'
import { useSelector } from 'react-redux'
import type { RootState } from '@/app/store'

const Greeting = () => {
  const { greet,greetings, status } = useSelector((state: RootState) => state.greetings)
  const { isDark } = useContext(StyleContext) as StyleContextType
  const [modalType, setModalType] = useState<null | 'Create' | 'Read' | 'Update' | 'Delete'>(null)
  const dispatch = useAppDispatch()
  const [greeting, setGreeting] = useState<Greetings>({
    username: '',
    title: '',
    subtitle: '',
    resume_link: '',
    display: true,
  })
  
  useEffect(() => {
    dispatch(fetchGreeting()).then(response => {
      const data = (response as { payload?: Greetings })?.payload
      if (data) {
        const greetingData = Array.isArray(data) ? data[0] : data
        setGreeting((prev) => {
          const isDifferent = JSON.stringify(prev) !== JSON.stringify(greetingData)
          return isDifferent ? { ...prev, ...greetingData } : prev
        })
      }
    })
  }, [dispatch])

  // useEffect(() => {
  //   if (greeting) {
  //     console.log('Greeting status:', greeting)
  //   }
  // }, [greeting])

  useEffect(() => {
    console.log('Greeting status:', greetings)
    if (status === 'fulfilled') {
      toast.success('Greeting fetched successfully!')
    }
    if (status === 'rejected') {
      toast.error('Failed to fetch greeting')
    }
    if (status === 'pending') {
      // toast.info('Fetching greeting...')
    }
  }, [status])
  const closeModal = () => setModalType(null)

  const handleSubmit = () => {
    // Dispatch create action
    const data: Greetings = {
      id: greet?.id || 0,
      username: greeting.username,
      title: greeting.title,
      subtitle: String(greeting.subtitle),
      resume_link: greeting.resume_link,
      display: greeting.display,
    }
    if (modalType === 'Create') {
      dispatch(addGreeting(data)).then(() => {
        if(status === 'fulfilled') {
          toast.success('Greeting created successfully!')
        } else {
          toast.error('Failed to create greeting')
        }
        closeModal()
      })
    } else if (modalType === 'Update') {
      dispatch(updateGreeting(data)).then(() => {
        closeModal()
        if (status === 'fulfilled') {
          toast.success('Greeting updated successfully!')
        } else {
          toast.error('Failed to update greeting')
        }
      })
    } else if (modalType === 'Delete') {
      if (typeof data.id === 'number') {
        dispatch(deleteGreeting(data.id)).then(() => {
          if (status === 'fulfilled') {
            toast.success('Greeting deleted successfully!')
          } else {
            toast.error('Failed to delete greeting')
          }
          closeModal()
        })
      } else {
        alert('Cannot delete: Greeting ID is missing.')
        closeModal()
      }
    }
  }
 
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
                Hi <span className="wave-emoji">{emoji('👋')}</span>,
                I am {greeting.username || 'User'}! <br />
                {greeting.title}
              </h1>
              <p className={isDark ? 'dark-mode greeting-text-p' : 'greeting-text-p subTitle'}>
                {greeting.subtitle}
              </p>
              <div id="resume" className="empty-div" />
              <SocialMedia />
              <div className="button-greeting-div">
                <CustomButton text="Contact me" href="#contact" />
                {greeting.resume_link && (
                  <CustomButton text="Download my resume" href={resumePDF} download="Resume.pdf" />
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
      <PopupModal title={`${modalType} Greeting`} isOpen={!!modalType} submit={handleSubmit} onClose={closeModal}>
        {modalType === 'Read' ? (
          <pre>{JSON.stringify(greet, null, 2)}</pre>
        ) : modalType === 'Delete' ? (
          <div>
            <p>Are you sure you want to delete this greeting?</p>
            <pre>{JSON.stringify(greet, null, 2)}</pre>
            <Button variant="danger" onClick={handleSubmit}>
              Confirm Delete
            </Button>
            <Button onClick={closeModal}>Cancel</Button>
          </div>
        ) : (
          <Form
            onSubmit={e => {
              e.preventDefault()
              console.log(`${modalType} submitted`)
              closeModal()
            }}
          >
            <Row>
              <Col>
                <Form.Group controlId="formGreetingTitle">
                  {/* <Form.Label>Greeting Title:</Form.Label> */}
                  <Form.Control
                    type="text"
                    placeholder='Full Name'
                    onChange={e => setGreeting({ ...greeting, title: e.target.value })}
                    defaultValue={greet?.title || ''}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGreetingSubtitle">
                  {/* <Form.Label>Greeting Subtitle:</Form.Label> */}
                  <Form.Control
                    type="text"
                    placeholder='Job Title or Tagline'
                    onChange={e => setGreeting({ ...greeting, subtitle: e.target.value })}
                    defaultValue={String(greet?.subtitle ?? '')}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formGreetingUsername">
                  {/* <Form.Label>Username:</Form.Label> */}
                  <Form.Control
                    type="text"
                    placeholder='Username'
                    onChange={e => setGreeting({ ...greeting, username: e.target.value })}
                    defaultValue={greet?.username || ''}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGreetingResumeLink">
                  {/* <Form.Label>Resume Link:</Form.Label> */}
                  <Form.Control
                    type="text"
                    placeholder='Resume Link'
                    onChange={e => setGreeting({ ...greeting, resume_link: e.target.value })}
                    defaultValue={greet?.resume_link || ''}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formGreetingDisplay">
                  <Form.Check
                    type="switch"
                    label="Display Greeting"
                    onChange={e => setGreeting({ ...greeting, display: e.target.checked })}
                    defaultChecked={greet?.display ?? false}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        )}
      </PopupModal>
    </Fade>
  )
}
export default Greeting
