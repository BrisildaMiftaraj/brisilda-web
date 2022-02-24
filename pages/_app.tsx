import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const colors = {
  brand: {
    100: '#ffda8b',
    200: '#ffd477',
    300: '#ffcd64',
    400: '#ffc750',
    500: '#ffc13d',
    600: '#e6ae37',
    700: '#cc9a31',
    800: '#b3872b',
    900: '#997425',
  },
}

const theme = extendTheme({
  fonts: {
    heading: `"IBM Plex Mono", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `"IBM Plex Mono", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `"IBM Plex Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },
  colors,
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none'
        }
      }
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
