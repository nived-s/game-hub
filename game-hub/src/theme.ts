import { extendTheme, ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme