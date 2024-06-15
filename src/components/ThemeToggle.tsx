import React, { FC, useContext } from 'react'
import styled from 'styled-components'

// Context
import ThemeContext from '../context/ThemeContext'

const ThemeToggle: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <Container>
      <Label>Darktheme</Label>
      <Toggle>
        <input onChange={() => toggleTheme()} type="checkbox" />
        <Slider />
      </Toggle>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Label = styled.span`
  margin-right: 12px;
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 28px;

  :before {
    position: absolute;
    content: '';
    height: 24px;
    width: 24px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 28px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${Slider} {
      background-color: ${({ theme }) => theme.colors.primary};
      &:before {
        transform: translateX(20px);
      }
    }
  }
`

export default ThemeToggle
