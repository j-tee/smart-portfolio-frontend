import './SoftwareSkill.scss'
import { skillsSection } from '@/portfolio'

const SoftwareSkill = () => {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map(skills => (
            <li key={skills.skillName} className="software-skill-inline">
              <i className={skills.fontAwesomeClassname} />
              <p>{skills.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default SoftwareSkill
