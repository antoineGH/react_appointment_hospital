import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import CountElement from '../../components/countElement/CountElement'
import TileList from '../../components/tileList/TileList'
import OffCanvasForm from '../../components/offCanvasForm/OffCanvasForm'

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
			alert('Doctor already exists')
			return
		}
		if (!firstName || !lastName || !phone || !email) {
			alert('Missing fields')
			return
		}
		addContact(firstName, lastName, phone, email)
		setFirstName('')
		setLastName('')
		setPhone('')
		setEmail('')
	}

	// CANVAS
	const [showCanvas, setShowCanvas] = useState(true)
	const handleCloseCanvas = () => setShowCanvas(false)
	const handleShowCanvas = () => setShowCanvas(true)
	const toggleCanvas = () => setShowCanvas(!showCanvas)

	return (
		<Container className='container_contact'>
			<CountElement title='Doctor' count={countDoctors} />
			<TileList items={contacts} removeItems={removeContact} />
			<OffCanvasForm title={'Add Contact'} typeForm={'Contact'} showCanvas={showCanvas} handleCloseCanvas={handleCloseCanvas} />
			<button onClick={toggleCanvas}>Toggle</button>
		</Container>
	)
}
