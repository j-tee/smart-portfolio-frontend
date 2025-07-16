import { useContext } from 'react'
import './SplashScreen.css'
import DisplayLottie from '@/components/displayLottie/DisplayLottie'
import { greeting, splashScreen } from '@/portfolio'
import StyleContext from '@/contexts/StyleContext'
import type { StyleContextType } from '@/contexts/StyleContext'

const SplashScreen = () => {
  const { isDark } = useContext(StyleContext) as StyleContextType
  return (
    <div className={isDark ? 'dark-mode splash-container' : 'splash-container'}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        <span className="grey-color"> &lt;</span>
        <span className="splash-title">{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  )
}
export default SplashScreen
