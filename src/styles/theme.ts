const theme = {
  colors: {
    primary: '#0095da',
    neutral: {
      white: '#ffffff',
      black: '#2C2C2C',
    },
  },
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

export interface ITheme {
  colors: typeof theme.colors
  fonts: typeof theme.fonts
  sizes: typeof theme.sizes
}

export default theme as ITheme
