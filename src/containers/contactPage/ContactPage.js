import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import CountElement from '../../components/countElement/CountElement'
import TileList from '../../components/tileList/TileList'
import OffCanvasForm from '../../components/offCanvasForm/OffCanvasForm'
import CustomToast from '../../components/customToast/CustomToast'
import './ContactPage.css'

export default function ContactPage(props) {
	const { contacts, addContact, removeContact } = props

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [duplicate, setDuplicate] = useState(false)
	const [countDoctors, setCountDoctors] = useState(contacts.length)

	useEffect(() => {
		setCountDoctors(contacts.length)
	}, [contacts])

	useEffect(() => {
		contacts.forEach((contact) => {
			if (contact.firstName === firstName && contact.lastName === lastName) {
				setDuplicate(true)
			}
		})
	}, [firstName, lastName, contacts])

	const handleSubmit = (e) => {
		e.preventDefault()
		if (duplicate) {
			setToastBody('Doctor already exists')
			setToastType('warning')
			toggleToast()
			setFirstName('')
			setLastName('')
			setDuplicate(false)
			return
		}
		if (!firstName || !lastName || !phone || !email) {
			setToastBody('Missing fields')
			setToastType('warning')
			toggleToast()
			return
		}
		addContact(firstName, lastName, phone, email)
		setFirstName('')
		setLastName('')
		setPhone('')
		setEmail('')
		handleCloseCanvas()
		setToastBody('Contact added')
		setToastType('success')
		toggleToast()
	}

	// TOASTS
	const [showToast, setShowToast] = useState(false)
	const [toastBody, setToastBody] = useState('')
	const [toastType, setToastType] = useState('')
	const toggleToast = () => setShowToast(!showToast)

	// CANVAS
	const [showCanvas, setShowCanvas] = useState(false)
	const handleCloseCanvas = () => setShowCanvas(false)
	const handleShowCanvas = () => setShowCanvas(true)

	return (
		<Container className='container_contact'>
			<Row className='mt-3'>
				<Col className='col_count'>
					<CountElement title='Doctor' count={countDoctors} />
					<Button className='ml-2 btn_add' variant='dark' onClick={handleShowCanvas}></Button>
				</Col>
			</Row>
			<TileList items={contacts} removeItems={removeContact} />
			<OffCanvasForm
				titleCanvas={'Add Doctor'}
				typeForm={'Contact'}
				showCanvas={showCanvas}
				handleCloseCanvas={handleCloseCanvas}
				firstName={firstName}
				setFirstName={setFirstName}
				lastName={lastName}
				setLastName={setLastName}
				phone={phone}
				setPhone={setPhone}
				email={email}
				setEmail={setEmail}
				handleSubmit={handleSubmit}
			/>
			{showToast && <CustomToast showToast={showToast} toggleToast={toggleToast} toastType={toastType} toastTime={'just now'} toastBody={toastBody} />}
		</Container>
	)
}
