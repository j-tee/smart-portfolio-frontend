import { useState, useEffect, useContext, Suspense, lazy } from 'react'
import './Project.scss'
import Button from '../../components/button/Button'
import { openSource, socialMediaLinks } from '../../portfolio'
import StyleContext from '../../contexts/StyleContext'
import type { StyleContextType } from '../../contexts/StyleContext'
import Loading from '../loading/Loading'

const Projects = () => {
  const GithubRepoCard = lazy(() => import('../../components/githubRepoCard/GithubRepoCard'))
  const FailedLoading = () => {
    return null
  }
  const renderLoader = () => <Loading />
  const [repo, setrepo] = useState<RepoArray | string>([])
  // todo: remove useContex because is not supported
  const { isDark } = useContext(StyleContext) as StyleContextType

  useEffect(() => {
    const getRepoData = () => {
      fetch('/profile.json')
        .then(result => {
          if (result.ok) {
            return result.json()
          }
          throw result
        })
        .then(response => {
          setrepoFunction(response.data.user.pinnedItems.edges)
        })
        .catch(function (error) {
          console.error(
            `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          )
          setrepoFunction('Error')
        })
    }
    getRepoData()
  }, [])

  interface RepoNode {
    node: {
      id: string
      url: string
      name: string
      description: string
      primaryLanguage: {
        color: string
        name: string
      } | null
      forkCount: number
      stargazers: {
        totalCount: number
      }
      diskUsage: number
      [key: string]: any
    }
    [key: string]: any
  }

  type RepoArray = RepoNode[]

  function setrepoFunction(array: RepoArray | string) {
    setrepo(array)
  }
  if (!(typeof repo === 'string' || repo instanceof String) && openSource.display) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                console.error(`Github Object for repository number : ${i} is undefined`)
              }
              return <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
            })}
          </div>
          <Button
            text="More Projects"
            className="project-button"
            href={socialMediaLinks.github}
            newTab
          />
        </div>
      </Suspense>
    )
  }
  return <FailedLoading />
}
export default Projects
