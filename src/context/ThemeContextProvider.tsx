import React, { ReactNode, useState } from 'react'
import ThemeContext from './ThemeContext'

interface IProps {
  children: ReactNode
}

const ThemeContextProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: (theme) => setTheme(theme) }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
