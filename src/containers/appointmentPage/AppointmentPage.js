import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CountElement from '../../components/countElement/CountElement'
import TileList from '../../components/tileList/TileList'
import AlertToasts from '../../components/alertToasts/AlertToasts'

export default function AppointmentPage(props) {
	const {
		appointments,
		contacts,
		addAppointment,
		removeAppointment,
		showAlert,
		setShowAlert,
		alertTitle,
		setAlertTitle,
		alertMessage,
		setAlertMessage,
		alertTime,
		setAlertTime,
	} = props

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
		if (!title || !contact || !date || !time) {
			setAlertTitle('warning')
			setAlertMessage('Missing fields')
			setAlertTime('just now')
			setShowAlert(true)
			setTimeout(() => {
				setShowAlert(false)
			}, 3000)
		}
	}

	return (
		<Container fluid className='container_appointment'>
			<CountElement title='Appointment' count={countAppointments} />
			<TileList items={appointments} removeItems={removeAppointment} />
			<button onClick={handleSubmit}>SUMBIT</button>
		</Container>
	)
}
