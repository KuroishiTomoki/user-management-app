
import { Button, ChakraProvider } from '@chakra-ui/react'
import './App.css'
import theme from './theme/theme'

function App() {

  return (
    <ChakraProvider value={theme}>
      <Button colorPalette="teal">ボタン</Button>
      <p>あああ</p>
    </ChakraProvider>
  )
}

export default App
