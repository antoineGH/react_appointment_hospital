import React from 'react'
import { Form } from 'react-bootstrap'
import capitalize from '../../utils/capitalize'
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function SearchBar(props) {
	const { type, searchAppointments, setSearchAppointments } = props
	return (
		<>
			<div className='input-group'>
				<Form.Control
					type='text'
					placeholder={'Filter ' + capitalize(type)}
					value={searchAppointments}
					onChange={(e) => setSearchAppointments(e.target.value)}
				/>
				<div className='input-group-append'>
					<div className='input-group-text' id='btnGroupAddon2'>
						<FontAwesomeIcon className='ml-1 mr-1' size='1x' icon={['fas', 'search']} />
					</div>
				</div>
			</div>
		</>
	)
}
