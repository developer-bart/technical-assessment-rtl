import React, { ReactNode, useContext } from 'react'
import { ThemeProvider } from 'styled-components'

// Themes
import { lightTheme, darkTheme } from '../styles/theme'

// Context
import ThemeContext from '../context/ThemeContext'

interface IProps {
  children: ReactNode
}

const ThemeLayout = ({ children }: IProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeLayout
