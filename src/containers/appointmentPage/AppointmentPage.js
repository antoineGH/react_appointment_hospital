import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CountElement from '../../components/countElement/CountElement'
import TileList from '../../components/tileList/TileList'
import AlertToasts from '../../components/alertToasts/AlertToasts'

export default function AppointmentPage(props) {
	const { appointments, contacts, addAppointment, removeAppointment } = props

	const [title, setTitle] = useState('')
	const [contact, setContact] = useState('')
	const [date, setDate] = useState('')
	const [time, setTime] = useState('')
	const [countAppointments, setCountAppointments] = useState(appointments.length)
	const [showAlert, setShowAlert] = useState(false)
	const [alertTitle, setAlertTitle] = useState('')
	const [alertMessage, setAlertMessage] = useState('')
	const [alertTime, setAlertTime] = useState('')

	useEffect(() => {
		setCountAppointments(appointments.length)
	}, [appointments])

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!title || !contact || !date || !time) {
			setAlertTitle('Warning')
			setAlertMessage('Missing fields')
			setAlertTime('just now')
			setShowAlert(true)
			setTimeout(() => {
				setShowAlert(false)
			}, 5000)
		}
	}

	const toggleShowAlert = () => {
		setShowAlert(!showAlert)
	}

	return (
		<Container fluid className='container_appointment'>
			<CountElement title='Appointment' count={countAppointments} />
			<TileList items={appointments} removeItems={removeAppointment} />
			<AlertToasts show={showAlert} toggleShowAlert={toggleShowAlert} title={alertTitle} time={alertTime} message={alertMessage} />
			<button onClick={handleSubmit}>SUMBIT</button>
		</Container>
	)
}
