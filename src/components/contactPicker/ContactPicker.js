import React from 'react'
import { Form, Col } from 'react-bootstrap'

export default function ContactPicker(props) {
	const { contacts, onChange } = props

	return (
		<Form.Group as={Col} controlId='formGridTitle'>
			<Form.Label>Doctor</Form.Label>
			<Form.Select aria-label='Default select' onChange={(e) => onChange(e)}>
				<option value='' defaultValue disabled>
					Select Doctor
				</option>
				{contacts.map((contact, count) => {
					count++
					return (
						<option key={count} value={contact.firstName + ' ' + contact.lastName}>
							{contact.firstName + ' ' + contact.lastName}
						</option>
					)
				})}
			</Form.Select>
		</Form.Group>
	)
}
