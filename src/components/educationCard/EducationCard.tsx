import { createRef, useContext } from 'react'
import './EducationCard.scss'
import StyleContext from '../../contexts/StyleContext'
import type { StyleContextType } from '../../contexts/StyleContext'
import { Fade, Slide } from 'react-awesome-reveal'

interface School {
  logo?: string
  name?: string
  schoolName: string
  subHeader: string
  duration: string
  desc: string
  descBullets?: string[]
}

const EducationCard = ({ school }: { school: School }) => {
  const imgRef = createRef<HTMLImageElement>()
  const { isDark } = useContext(StyleContext) as StyleContextType
  const GetDescBullets = ({ descBullets }: { descBullets?: string[] }) => {
    return descBullets
      ? descBullets.map(item => (
          <li key={item} className="subTitle">
            {item}
          </li>
        ))
      : null
  }
  // eslint-disable-next-line no-console
  // console.log(school.logo, school.schoolName, 'in education section')
  if (!school.logo) console.error(`Image of ${school.name} is missing in education section`)
  return (
    <div>
      <Fade direction="left" duration={1000}>
        <div className="education-card">
          {school.logo && (
            <div className="education-card-left">
              <img
                crossOrigin="anonymous"
                ref={imgRef}
                className="education-roundedimg"
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          )}
          <div className="education-card-right">
            <h5 className="education-text-school">{school.schoolName}</h5>

            <div className="education-text-details">
              <h5
                className={
                  isDark ? 'dark-mode education-text-subHeader' : 'education-text-subHeader'
                }
              >
                {school.subHeader}
              </h5>
              <p className={`${isDark ? 'dark-mode' : ''} education-text-duration`}>
                {school.duration}
              </p>
              <p className="education-text-desc">{school.desc}</p>
              <div className="education-text-bullets">
                <ul>
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide direction="left" duration={2000}>
        <div className="education-card-border" />
      </Slide>
    </div>
  )
}
export default EducationCard
