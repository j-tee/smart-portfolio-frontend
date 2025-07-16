import { useContext } from 'react'
import './WorkExperience.scss'
import { Fade } from 'react-awesome-reveal'
import ExperienceCard from '@/components/experienceCard/ExperienceCard'
import { workExperiences } from '@/portfolio'
import StyleContext from '@/contexts/StyleContext'
import type { StyleContextType } from '@/contexts/StyleContext'

const WorkExperience = () => {
  const { isDark } = useContext(StyleContext) as StyleContextType
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade direction="up" duration={1000}>
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      // eslint-disable-next-line react/no-array-index-key
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets,
                      }}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    )
  }
  return null
}
export default WorkExperience
