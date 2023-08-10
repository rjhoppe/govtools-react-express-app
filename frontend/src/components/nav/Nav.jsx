import React from 'react'
import './nav.css'
import { 
  Stack,
  Input,
} from '@chakra-ui/react'

export const Nav = () => {
  return (
    <body>
      <div className='nav__container'>
        <Stack width='200px'>
          <Input placeholder='medium size' size='md' />
          <Input placeholder='medium size' size='md' />
          <Input placeholder='medium size' size='md' />
          <Input placeholder='medium size' size='md' />
          <Input placeholder='medium size' size='md' />
        </Stack>
      </div>
    </body>
  )
}

export default Nav