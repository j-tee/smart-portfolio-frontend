import { useState, useEffect, useContext, Suspense, lazy } from 'react'
import './Project.scss'
import CustomButton from '@/components/button/Button'
import { openSource, socialMediaLinks } from '@/portfolio'
import StyleContext from '@/contexts/StyleContext'
import type { StyleContextType } from '@/contexts/StyleContext'
import Loading from '../loading/Loading'

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
    [key: string]: unknown
  }
  [key: string]: unknown
}

type RepoArray = RepoNode[]

const Projects = () => {
  const GithubRepoCard = lazy(() => import('@/components/githubRepoCard/GithubRepoCard'))
  const FailedLoading = () => null
  const renderLoader = () => <Loading />
  const [repo, setrepo] = useState<RepoArray | string>([])
  const { isDark } = useContext(StyleContext) as StyleContextType

  useEffect(() => {
    const setrepoFunction = (array: RepoArray | string) => {
      setrepo(array)
    }

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
        .catch(error => {
          // eslint-disable-next-line no-console
          console.error(
            `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          )
          setrepoFunction('Error')
        })
    }

    getRepoData()
  }, [])

  if (!(typeof repo === 'string' || repo instanceof String) && openSource.display) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                // eslint-disable-next-line no-console
                console.error(`Github Object for repository number : ${i} is undefined`)
              }
              return <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
            })}
          </div>
          <CustomButton
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
