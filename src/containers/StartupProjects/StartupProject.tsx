import { useContext } from 'react'
import './StartupProjects.scss'
import { Fade } from 'react-awesome-reveal'
import { bigProjects } from '@/portfolio'
import StyleContext from '@/contexts/StyleContext'
import type { StyleContextType } from '@/contexts/StyleContext'

const StartupProject = () => {
  function openUrlInNewTab(url: string): void {
    if (!url) {
      return
    }
    const win = window.open(url, '_blank')
    win?.focus()
  }

  const { isDark } = useContext(StyleContext) as StyleContextType
  if (!bigProjects.display) {
    return null
  }
  return (
    <Fade duration={1000}>
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p className={isDark ? 'dark-mode project-subtitle' : 'subTitle project-subtitle'}>
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map(project => {
              return (
                <div
                  key={project.projectName}
                  className={
                    isDark
                      ? 'dark-mode project-card project-card-dark'
                      : 'project-card project-card-light'
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img src={project.image} alt={project.projectName} className="card-image" />
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5 className={isDark ? 'dark-mode card-title' : 'card-title'}>
                      {project.projectName}
                    </h5>
                    <p className={isDark ? 'dark-mode card-subtitle' : 'card-subtitle'}>
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map(link => {
                          return (
                            <span
                              key={link.name}
                              role="button"
                              tabIndex={0}
                              className={isDark ? 'dark-mode project-tag' : 'project-tag'}
                              onClick={() => openUrlInNewTab(link.url)}
                              onKeyDown={e => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault()
                                  openUrlInNewTab(link.url)
                                }
                              }}
                            >
                              {link.name}
                            </span>
                          )
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Fade>
  )
}
export default StartupProject
