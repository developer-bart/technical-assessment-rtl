import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import ThemeContextProvider from '../context/ThemeContextProvider'
import ThemeLayout from './themeLayout'

// Styling
import CSSReset from '../styles/reset'
import GlobalStyle from '../styles/'

interface IProps {
  children: ReactNode
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <CSSReset />
      <GlobalStyle />
      <ThemeContextProvider>
        <ThemeLayout>
          <Wrapper>{children}</Wrapper>
        </ThemeLayout>
      </ThemeContextProvider>
    </>
  )
}

const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
    font-family: ${theme.fonts.primary};

    a {
      color: ${theme.colors.primary};
    }
  `}
`

export default Layout
