import React from 'react'
import { Form } from 'react-bootstrap'
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function SearchBar(props) {
	const { type } = props
	return (
		<>
			<div class='input-group'>
				<Form.Control type='text' placeholder='Search..' />
				<div class='input-group-append'>
					<div class='input-group-text' id='btnGroupAddon2'>
						<FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={['fas', 'search']} />
					</div>
				</div>
			</div>
		</>
	)
}
