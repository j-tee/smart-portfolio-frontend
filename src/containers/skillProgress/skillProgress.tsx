import './Progress.scss'
import { Fade } from 'react-awesome-reveal'
import { illustration, techStack } from '../../portfolio'
import Build from '../../assets/lottie/build.json'
import DisplayLottie from '../../components/displayLottie/DisplayLottie'

const StackProgress = () => {
  if (techStack.viewSkillBars) {
    return (
      <Fade direction="up" duration={1000}>
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage,
              }
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle} />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img alt="Skills" src={require('../../assets/images/skill.svg')} />
            )}
          </div>
        </div>
      </Fade>
    )
  }
  return null
}
export default StackProgress
