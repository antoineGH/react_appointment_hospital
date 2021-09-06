import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import './ContactForm.css'

export default function ContactForm(props) {
	const { firstName, setFirstName, lastName, setLastName, phone, setPhone, email, setEmail, handleSubmit } = props
	return (
		<Form onSubmit={handleSubmit}>
			<Row className='mb-3'>
				<Form.Group as={Col} className='col-12 mb-2 mb-md-0 col-md-6' controlId='formGridFirstName'>
					<Form.Label>First Name</Form.Label>
					<Form.Control value={firstName} onChange={(e) => setFirstName(e.target.value)} type='text' placeholder='Enter first name' />
				</Form.Group>

				<Form.Group as={Col} className='col-12 col-md-6' controlId='formGridLastName'>
					<Form.Label>Last Name</Form.Label>
					<Form.Control value={lastName} onChange={(e) => setLastName(e.target.value)} type='text' placeholder='Enter last name' />
				</Form.Group>
			</Row>
			<Row className='mb-3'>
				<Form.Group as={Col} className='col-12 mb-2 mb-md-0 col-md-6' controlId='formGridPhone'>
					<Form.Label>Phone</Form.Label>
					<Form.Control value={phone} onChange={(e) => setPhone(e.target.value)} type='tel' placeholder='Enter phone number' />
				</Form.Group>

				<Form.Group as={Col} className='col-12 col-md-6' controlId='formGridEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter email' />
				</Form.Group>
			</Row>
			<Row className='row_submit'>
				<Button variant='secondary' type='submit'>
					Add Doctor
				</Button>
			</Row>
		</Form>
	)
}
