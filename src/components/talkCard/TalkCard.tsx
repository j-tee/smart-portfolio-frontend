import React from 'react'
import './TalkCard.scss'

interface TalkDetails {
  isDark: boolean
  title: string
  subtitle: string
  slides_url: string
  event_url: string
  image?: string
}

interface TalkCardProps {
  talkDetails: TalkDetails
}

const TalkCard: React.FC<TalkCardProps> = ({ talkDetails }) => {
  return (
    <div>
      <div className="container">
        <div className={talkDetails.isDark ? 'dark-rectangle rectangle' : 'rectangle'}>
          <div className="diagonal-fill" />
          <div className="talk-card-title">{talkDetails.title}</div>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

          <div className="card-footer-button-div">
            <a href={talkDetails.slides_url} target="_" className="talk-button">
              Slides
            </a>
            <a href={talkDetails.event_url} target="_" className="talk-button">
              Event
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TalkCard
