import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import CountElement from '../../components/countElement/CountElement'
import TileList from '../../components/tileList/TileList'
import AlertToasts from '../../components/alertToasts/AlertToasts'

export default function ContactPage(props) {
	const { contacts, addContact, removeContact } = props

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [duplicate, setDuplicate] = useState(false)
	const [countDoctors, setCountDoctors] = useState(contacts.length)
	const [showAlert, setShowAlert] = useState(false)
	const [alertTitle, setAlertTitle] = useState('')
	const [alertMessage, setAlertMessage] = useState('')
	const [alertTime, setAlertTime] = useState('')

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
			setAlertTitle('Error')
			setAlertMessage('Doctor already exists')
			setAlertTime('just now')
			setShowAlert(true)
			setTimeout(() => {
				setShowAlert(false)
			}, 5000)
			setDuplicate(false)
			return
		}
		if (!firstName || !lastName || !phone || !email) {
			setAlertTitle('Warning')
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

	const toggleShowAlert = () => {
		setShowAlert(!showAlert)
	}

	return (
		<Container className='container_contact'>
			<CountElement title='Doctor' count={countDoctors} />
			<TileList items={contacts} removeItems={removeContact} />
			<AlertToasts show={showAlert} toggleShowAlert={toggleShowAlert} title={alertTitle} time={alertTime} message={alertMessage} />
			<button onClick={handleSubmit}>SUMBIT</button>
		</Container>
	)
}
