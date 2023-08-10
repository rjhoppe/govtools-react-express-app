import React from 'react'
import Tableentry from './Tableentry'
import './usermanager.css'
import { 
	TabPanel,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	TableCaption,
	TableContainer,
	Button,
	Select,
	Stack,
	FormControl,
	Input,
} from '@chakra-ui/react'


const Usermanager = () => {
	
	return (
		<body>
			<TabPanel border='2px' borderColor='red' height='80vh' background='gray.200'>
				<h2 id='user__mgmt_title'>User Manager</h2>
				<Select placeholder='Request type' borderColor='teal' width='150px' marginBottom='25px' marginRight='145px' textAlign='center'>
							<option textAlign='center' id='' value='option1'>UPDATE</option>
							<option textAlign='center' id='' value='option2'>CREATE</option>
							<option textAlign='center' id='' value='option3'>DELETE</option>
				</Select>
				<TableContainer>
					<Table variant='striped' size='sm'>
						<TableCaption marginRight='145px'>Note: Blank values will not be sent with an update request</TableCaption>
						<Thead>
							<Tr>
								<Th>Field Name</Th>
								<Th>Example</Th>
								<Th isNumeric>Required?</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tableentry fieldName={'userId'} example={'placeholder'} required={'Yes'}/>
							<Tableentry fieldName={'username'} example={'placeholder'} required={'No'}/>
							<Tableentry fieldName={'firstName'} example={'placeholder'} required={'No'}/>
							<Tableentry fieldName={'lastName'} example={'placeholder'} required={'No'}/>
							<Tableentry fieldName={'userType'} example={'placeholder'} required={'No'}/>
							<Tableentry fieldName={'divisionId'} example={'placeholder'} required={'No'}/>
							<Tableentry fieldName={'status'} example={'placeholder'} required={'No'}/>
							<Tableentry fieldName={'language'} example={'placeholder'} required={'No'}/>
							<Tableentry fieldName={'timezone'} example={'placeholder'} required={'No'}/>
							<Tableentry fieldName={'permissions'} example={'placeholder'} required={'No'}/>
							<Tableentry fieldName={'accountExpirationDate'} example={'placeholder'} required={'No'}/>
							<Tableentry fieldName={'email'} example={'placeholder'} required={'No'}/>
						</Tbody>
					</Table>
				</TableContainer>
				<div user__manager__buttons>
					<Stack justifyContent='center' alignItems='center' marginTop='25px'>
						<FormControl>
							<form action='http://localhost:5000/upload' method='POST' enctype='multipart/form-data'>
								<Input type='file' name='file' width='250px' required/>
								<Button type='submit' colorScheme='teal' variant='outline'>
									Upload
								</Button>
							</form>
						</FormControl>
						<Button colorScheme='teal' variant='outline'>
							Example CSV
						</Button>
							<Button colorScheme='teal' variant='outline' width='235px'>
								Submit Request
							</Button>
					</Stack>
				</div>
			</TabPanel>
		</body>
	)
}

export default Usermanager