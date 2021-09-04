import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import CountElement from '../../components/countElement/CountElement'
import TileList from '../../components/tileList/TileList'
import ModalConfirm from '../../components/modalConfirm/ModalConfirm'

export default function ContactPage(props) {
	const { contacts, addContact, removeContact } = props

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [duplicate, setDuplicate] = useState(false)
	const [countDoctors, setCountDoctors] = useState(contacts.length)
	const [show, setShow] = useState(true)

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

	const handleClose = () => {
		setShow(false)
	}

	return (
		<Container className='container_contact'>
			<CountElement title='Doctor' count={countDoctors} />
			<TileList items={contacts} removeItems={removeContact} />
			<ModalConfirm
				show={show}
				handleClose={handleClose}
				header={'Delete Confirmation'}
				body={'Are you sure you want to delete this item?'}
				btnOne={'Cancel'}
				btnTwo={'Delete'}
			/>
		</Container>
	)
}
