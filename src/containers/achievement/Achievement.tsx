import { useContext } from 'react'
import './Achievement.scss'
import { Fade } from 'react-awesome-reveal'
import AchievementCard from '../../components/achievementCard/AchievementCard'
import { achievementSection } from '../../portfolio'
import StyleContext from '../../contexts/StyleContext'
import type { StyleContextType } from '../../contexts/StyleContext'

const Achievement = () => {
  const { isDark } = useContext(StyleContext) as StyleContextType
  if (!achievementSection.display) {
    return null
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark ? 'dark-mode heading achievement-heading' : 'heading achievement-heading'
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark ? 'dark-mode subTitle achievement-subtitle' : 'subTitle achievement-subtitle'
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map(card => {
              return (
                <AchievementCard
                  key={card.footerLink[0].name}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink,
                  }}
                />
              )
            })}
          </div>
        </div>
      </div>
    </Fade>
  )
}
export default Achievement
