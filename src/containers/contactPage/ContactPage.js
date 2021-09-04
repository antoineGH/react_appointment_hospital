import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import CountElement from '../../components/countElement/CountElement'
import TileList from '../../components/tileList/TileList'

export default function ContactPage(props) {
	const { contacts, addContact, removeContact, showAlert, setShowAlert, alertTitle, setAlertTitle, alertMessage, setAlertMessage, alertTime, setAlertTime } =
		props

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
			setAlertTitle('danger')
			setAlertMessage('Doctor already exists')
			setAlertTime('just now')
			setShowAlert(true)
			setTimeout(() => {
				setShowAlert(false)
			}, 50000)
			setDuplicate(false)
			return
		}
		if (!firstName || !lastName || !phone || !email) {
			setAlertTitle('warning')
			setAlertMessage('Missing fields')
			setAlertTime('just now')
			setShowAlert(true)
			setTimeout(() => {
				setShowAlert(false)
			}, 5000)
			setDuplicate(false)
			return
		}
		addContact(firstName, lastName, phone, email)
		setFirstName('')
		setLastName('')
		setPhone('')
		setEmail('')
	}

	return (
		<Container className='container_contact'>
			<CountElement title='Doctor' count={countDoctors} />
			<TileList items={contacts} removeItems={removeContact} />
			<button onClick={handleSubmit}>SUMBIT</button>
		</Container>
	)
}
