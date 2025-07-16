import React, { useState, useEffect, lazy, Suspense } from 'react'
import { openSource } from '@/portfolio'
import Contact from '@/containers/contact/Contact'
import Loading from '@/containers/loading/Loading'

function renderLoader() {
  return React.createElement(Loading)
}

const GithubProfileCard = lazy(() => import('@/components/githubProfileCard/GithubProfileCard'))

const Profile = () => {
  interface GithubProfile {
    id: number
    bio: string
    location: string
    avatarUrl: string
    name: string
    [key: string]: unknown
  }

  const [prof, setrepo] = useState<GithubProfile | string>()

  useEffect(() => {
    const setProfileFunction = (array: GithubProfile | string) => {
      setrepo(array)
    }

    if (openSource.showGithubProfile === 'true') {
      const getProfileData = () => {
        fetch('/profile.json')
          .then(result => {
            if (result.ok) {
              return result.json()
            }
            throw new Error('Failed to fetch GitHub profile')
          })
          .then(response => {
            setProfileFunction(response.data.user)
          })
          .catch(error => {
            // eslint-disable-next-line no-console
            console.error(
              `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
            )
            setProfileFunction('Error')
            openSource.showGithubProfile = 'false'
          })
      }
      getProfileData()
    }
  }, [])

  if (
    openSource.display &&
    openSource.showGithubProfile === 'true' &&
    !(typeof prof === 'string' || prof instanceof String)
  ) {
    return React.createElement(
      Suspense,
      { fallback: renderLoader() },
      React.createElement(GithubProfileCard, {
        prof: prof as GithubProfile,
        key: (prof as GithubProfile)?.id,
      })
    )
  }

  return React.createElement(Contact)
}

export default Profile
