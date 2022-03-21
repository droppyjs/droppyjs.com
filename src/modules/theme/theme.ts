import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#215291',
    600: '#2261b0',
    500: '#2266bb',
    400: '#2e77d2',
    300: '#3a85e2',
    200: '#5193e5',
    100: '#70a6ea',

  },
}

const components = {
  Button: {
    baseStyle: {
      rounded: '3px'
    }
  },
  Input: {
    baseStyle: {
      rounded: '3px'
    }
  }

}

export const theme = extendTheme({ colors, components })
