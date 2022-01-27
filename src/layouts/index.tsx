import React, { ReactNode } from 'react'
import styled, { ThemeProvider } from 'styled-components'

// Styling
import CSSReset from '../styles/reset'
import GlobalStyle from '../styles/'
import theme from '../styles/theme'

interface IProps {
  children: ReactNode
}

const Layout: React.FC<IProps> = ({ children }) => (
  <>
    <CSSReset />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  </>
)

const Wrapper = styled.div`
  ${({ theme }) => `
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    font-family: ${theme.fonts.primary};

    a {
      color: ${theme.colors.blue};
    }
  `}
`

export default Layout
