import { useEffect, useState } from 'react'
import { splashScreen } from './portfolio'

import { StyleProvider } from './contexts/StyleContext'
import SplashScreen from './containers/splashScreen/SplashScreen'
import Header from './components/header/Header'
import Greeting from './containers/greeting/Greeting'
import Skills from './containers/skills/Skills'
import StackProgress from './containers/skillProgress/skillProgress'
import Education from './containers/education/Education'
import WorkExperience from './containers/workExperience/WorkExperience'
import Projects from './containers/projects/Projects'
import StartupProject from './containers/StartupProjects/StartupProject'
import Achievement from './containers/achievement/Achievement'
import Blogs from './containers/blogs/Blogs'
import Talks from './containers/talks/Talks'
import Twitter from './containers/twitter-embed/twitter'
import Podcast from './containers/podcast/Podcast'
import Profile from './containers/profile/Profile'
import Footer from './components/footer/Footer'
import useLocalStorage from './hooks/useLocalStorage'
import ScrollToTopButton from './containers/topbutton/Top'
import './App.scss'

const App = () => {
  const darkPref = window.matchMedia('(prefers-color-scheme: dark)')
  const [isDark, setIsDark] = useLocalStorage('isDark', darkPref.matches)
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true)

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      )
      return () => {
        clearTimeout(splashTimer)
      }
    }

    return undefined // ✅ Explicitly return something
  }, [])

  const changeTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className={isDark ? 'dark-mode' : undefined}>
      <StyleProvider value={{ isDark, changeTheme }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            <StackProgress />
            <Education />
            <WorkExperience />
            <Projects />
            <StartupProject />
            <Achievement />
            <Blogs />
            <Talks />
            <Twitter />
            <Podcast />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  )
}

export default App
