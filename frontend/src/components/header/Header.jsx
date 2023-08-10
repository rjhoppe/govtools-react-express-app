import React from 'react'
import './header.css'
import { FaMoon, FaSun } from 'react-icons/fa'
import { IconButton, useColorMode } from '@chakra-ui/react'


const Header = () => {
  
  const { colorMode, toggleColorMode } = useColorMode()
  
  return (
    <body>
        <div className='header__container'>
					<div className='header__content'>
						<h1>GovFunc</h1>
            <IconButton
              icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
              isRound="true"
              size="lg"
              alignSelf="flex-end"
              onClick={toggleColorMode}
            />
					</div>
				</div>
    </body>
  )
}

export default Header