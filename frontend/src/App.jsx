import React from 'react'
import './app.css'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/header/Header'
// import Nav from './components/nav/Nav'
import Functions from './components/functions/Functions'

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Functions />
      </ChakraProvider>
    </>
  );
}

export default App;
