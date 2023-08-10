import React from 'react'
import './functions.css'
import UserManager from './tools/User Manager/Usermanager'

import { 
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel,
  Stack,
  Input,
  Checkbox,
  Box,
} from '@chakra-ui/react'

const Functions = () => {
  return (
    <body>
      <div className='application__container'>
        <div className='user__attributes__container'>
          <Stack width='200px'>
            <Input placeholder='Brand Id' size='md' marginLeft='75px'/>
            <Input placeholder='User Id' size='md' marginLeft='75px'/>
            <Input placeholder='API Token' size='md' marginLeft='75px'/>
            <Box borderRadius='md' marginLeft='75px'>
              <Checkbox size='md' colorScheme='red' defaultChecked>
                Verified
              </Checkbox>
            </Box>
          </Stack>
        </div>
        <div className='functions__container'>
          <div className='functions__content'>
            <Tabs 
              variant='soft-rounded' 
              colorScheme='green' 
              align='center' 
              // marginLeft='200px'
              background='gray.200'
            >
              <TabList>
                <Tab>User Manager</Tab>
                <Tab>UUID Gen</Tab>
                <Tab>API Token Finder</Tab>
                <Tab>Create New Users</Tab>
                <Tab>Embedded Data Tool</Tab>
              </TabList>
              <TabPanels>
                <UserManager />
                <TabPanel border='2px' borderColor='red' height='80vh'>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Functions