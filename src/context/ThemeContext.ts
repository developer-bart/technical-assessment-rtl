import { createContext } from 'react'

export type Theme = 'light' | 'dark'
export type IThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<IThemeContextType>({
  theme: 'light',
  setTheme: () => {},
})

export default ThemeContext
