import React from 'react'

export interface StyleContextType {
  isDark: boolean
  changeTheme: () => void
  // add other properties if needed
}
const StyleContext = React.createContext({})

export const StyleProvider = StyleContext.Provider
export const StyleConsumer = StyleContext.Consumer

export default StyleContext
