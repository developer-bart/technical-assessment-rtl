const lightThemeColors = {
  colors: {
    primary: '#0095da',
    background: '#fff',
    text: '#171717',
    card: '#F9F9F9',
  },
}

const darkThemeColors = {
  colors: {
    primary: '#1c1',
    background: '#212121',
    text: '#B4B4B4',
    card: '#171717',
  },
}

const theme = {
  fonts: {
    // eslint-disable-next-line quotes
    primary: "'Open Sans', sans-serif",
  },
  sizes: {
    S: 768,
    M: 1024,
    L: 1280,
  },
}

export type Theme = typeof lightTheme

export const lightTheme = { ...theme, ...lightThemeColors }
export const darkTheme = { ...theme, ...darkThemeColors }
