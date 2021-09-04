import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import CountElement from '../../components/countElement/CountElement'
import TileList from '../../components/tileList/TileList'

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

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<Container fluid className='container_appointment'>
			<CountElement title='Appointment' count={countAppointments} />
			<TileList items={appointments} removeItems={removeAppointment} />
		</Container>
	)
}
