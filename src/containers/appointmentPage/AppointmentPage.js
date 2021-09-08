import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import CountElement from '../../components/countElement/CountElement'
import TileList from '../../components/tileList/TileList'
import OffCanvasForm from '../../components/offCanvasForm/OffCanvasForm'
import CustomToast from '../../components/customToast/CustomToast'
import SearchBar from '../../components/searchBar/SearchBar'
import './AppointmentPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function AppointmentPage(props) {
	const {
		appointments,
		contacts,
		addAppointment,
		removeAppointment,
		filteredAppointments,
		setFilteredAppointments,
		searchAppointments,
		setSearchAppointments,
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
			setToastBody('Missing Fields')
			setToastType('warning')
			toggleToast()
			return
		}
		addAppointment(title, contact, date, time)
		setTitle('')
		setContact('')
		setDate('')
		setTime('')
		handleCloseCanvas()
		setToastBody('Appointement added')
		setToastType('success')
		toggleToast()
	}

	// CANVAS
	const [showCanvas, setShowCanvas] = useState(false)
	const handleCloseCanvas = () => setShowCanvas(false)
	const handleShowCanvas = () => setShowCanvas(true)

	// TOASTS
	const [showToast, setShowToast] = useState(false)
	const [toastBody, setToastBody] = useState('')
	const [toastType, setToastType] = useState('')
	const toggleToast = () => setShowToast(!showToast)

	return (
		<Container fluid className='container_appointment'>
			<Row className='mt-3'>
				<Col className='col_count'>
					<CountElement title='Appointment' count={countAppointments} />
					<Button className='ml-2 btn_add' variant='dark' onClick={handleShowCanvas}>
						<FontAwesomeIcon className='ml-2' size='1x' icon={['fas', 'plus-square']} />
					</Button>
				</Col>
				<Col>
					<SearchBar type='appointments' searchAppointments={searchAppointments} setSearchAppointments={setSearchAppointments} />
				</Col>
			</Row>
			<TileList items={appointments} removeItems={removeAppointment} />
			<OffCanvasForm
				titleCanvas={'Add Appointment'}
				typeForm={'Appointment'}
				showCanvas={showCanvas}
				handleCloseCanvas={handleCloseCanvas}
				title={title}
				setTitle={setTitle}
				date={date}
				contacts={contacts}
				setContact={setContact}
				setDate={setDate}
				time={time}
				setTime={setTime}
				handleSubmit={handleSubmit}
			/>
			{showToast && <CustomToast showToast={showToast} toggleToast={toggleToast} toastType={toastType} toastTime={'just now'} toastBody={toastBody} />}
		</Container>
	)
}
