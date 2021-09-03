import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Badge, Accordion } from 'react-bootstrap'

export default function ContactPage(props) {
	const { contacts, addContact, removeContact } = props

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [duplicate, setDuplicate] = useState(false)

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
			alert('Already exists')
			setDuplicate(false)
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

	return (
		<Container>
			<Row>
				<Button variant='primary'>
					Profile <Badge bg='secondary'>9</Badge>
					<span className='visually-hidden'>unread messages</span>
				</Button>
			</Row>
			<Row></Row>
		</Container>
	)
}
