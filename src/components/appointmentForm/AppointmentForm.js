import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import ContactPicker from '../contactPicker/ContactPicker'
import './AppointmentForm.css'

export default function AppointmentForm(props) {
	const { title, setTitle, contacts, setContact, date, setDate, time, setTime, handleSubmit } = props

	const getTodayString = () => {
		const [month, day, year] = new Date().toLocaleDateString('en-US').split('/')
		return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Row className='mb-3'>
				<Form.Group as={Col} controlId='formGridTitle'>
					<Form.Label>Title</Form.Label>
					<Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Enter appointment title' />
				</Form.Group>
			</Row>
			<Row className='mb-3'>
				<ContactPicker contacts={contacts} onChange={(e) => setContact(e.target.value)} />
			</Row>
			<Row className='mb-3'>
				<Form.Group as={Col} controlId='formGridDate'>
					<Form.Label>Date</Form.Label>
					<Form.Control value={date} onChange={(e) => setDate(e.target.value)} min={getTodayString()} type='date' />
				</Form.Group>

				<Form.Group as={Col} controlId='formGridTime'>
					<Form.Label>Time</Form.Label>
					<Form.Control value={time} onChange={(e) => setTime(e.target.value)} type='time' />
				</Form.Group>
			</Row>
			<Row className='row_submit'>
				<Button variant='secondary' type='submit'>
					Add Appointment
				</Button>
			</Row>
		</Form>
	)
}
