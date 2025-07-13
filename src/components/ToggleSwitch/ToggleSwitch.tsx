import { useState, useContext } from 'react'
import emoji from 'react-easy-emoji'
import StyleContext from '../../contexts/StyleContext'
import type { StyleContextType } from '../../contexts/StyleContext'
import './ToggleSwitch.scss'

const ToggleSwitch = () => {
  const styleContext = useContext(StyleContext) as StyleContextType
  const { isDark, changeTheme } = styleContext
  const [isChecked, setChecked] = useState(isDark)

  return (
    <label className="switch" htmlFor="theme-toggle">
      <input
        id="theme-toggle"
        type="checkbox"
        checked={isDark}
        onChange={() => {
          changeTheme()
          setChecked(!isChecked)
        }}
      />
      <span className="slider round">
        <span className="emoji">{isChecked ? emoji('🌜') : emoji('☀️')}</span>
      </span>
    </label>
  )
}
export default ToggleSwitch
