import React from 'react'
import { Tr, Td } from '@chakra-ui/react'

const Tableentry = (props) => {
    return (
		<Tr>
			<Td>{props.fieldName}</Td>
			<Td>{props.example}</Td>
			<Td isNumeric>{props.required}</Td>
		</Tr>
  	)
}

export default Tableentry