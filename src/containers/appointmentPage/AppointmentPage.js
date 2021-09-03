import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CountElement from '../../components/countElement/CountElement'

export default function AppointmentPage(props) {
	const { appointments, contacts, addAppointment, removeAppointment } = props

	const [title, setTitle] = useState('')
	const [contact, setContact] = useState('')
	const [date, setDate] = useState('')
	const [time, setTime] = useState('')
	const [countAppointments, setCountAppointments] = useState(appointments.length)

	useEffect(() => {
		setCountAppointments(appointments.length)
	}, [appointments])

	return (
		<Container>
			<CountElement title='Appointments' count={countAppointments} />
			<Row></Row>
		</Container>
	)
}
