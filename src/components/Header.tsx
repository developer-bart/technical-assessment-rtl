import React, { FC } from 'react'
import styled from 'styled-components'

// Components
import ThemeToggle from './ThemeToggle'

const Header: FC = () => (
  <Container>
    <ThemeToggle />
  </Container>
)

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.card};
`

export default Header
