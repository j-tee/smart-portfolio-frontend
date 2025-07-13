import React, { useState, useEffect, lazy, Suspense } from 'react'
import { openSource } from '../../portfolio'
import Contact from '../contact/Contact'
import Loading from '../loading/Loading'

function renderLoader() {
  return React.createElement(Loading)
}
const GithubProfileCard = lazy(() => import('../../components/githubProfileCard/GithubProfileCard'))
const Profile = () => {
  interface GithubProfile {
    id: number
    bio: string
    location: string
    avatarUrl: string
    name: string
    [key: string]: any
  }
  const [prof, setrepo] = useState<GithubProfile | string>()

  function setProfileFunction(array: GithubProfile | string) {
    setrepo(array)
  }

  useEffect(() => {
    if (openSource.showGithubProfile === 'true') {
      const getProfileData = () => {
        fetch('/profile.json')
          .then(result => {
            if (result.ok) {
              return result.json()
            }
          })
          .then(response => {
            setProfileFunction(response.data.user)
          })
          .catch(function (error) {
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
