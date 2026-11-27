
import { Button, ChakraProvider } from '@chakra-ui/react'
import './App.css'
import theme from './theme/theme'
import { BrowserRouter } from 'react-router'
import { Router } from './components/router/Router'

function App() {

  return (
    <ChakraProvider value={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
