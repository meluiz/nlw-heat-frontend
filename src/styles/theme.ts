import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    text: {
      primary: '#e1e1e6',
      secondary: '#09090A',
      tone: {
        50: '#999898',
        100: '#777676',
        200: '#6D6D6D',
        300: '#646363',
        400: '#5B595A',
        500: '#5B595A',
        600: '#484646',
        700: '#3F3C3D',
        800: '#363233',
        900: '#1C191A'
      }
    },
    background: {
      primary: '#ff008E',
      secondary: '#FFCD1E',
      tone: {
        100: '#040303',
        200: '#070606',
        300: '#0B090A',
        400: '#0E0C0D',
        500: '#121010',
        600: '#151313',
        700: '#191616',
        800: '#1C191A',
        900: '#363233'
      }
    }
  },
  font: {
    family: 'Inter, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
  }
}