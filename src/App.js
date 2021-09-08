import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { routes } from './utils/routes'
import NavBar from './components/navBar/NavBar'
import ContactPage from './containers/contactPage/ContactPage'
import AppointmentPage from './containers/appointmentPage/AppointmentPage'
import ModalDeleteAppointement from './components/modalConfirm/ModalDeleteAppointement'
import ModalDeleteContact from './components/modalConfirm/ModalDeleteContact'
import CustomToast from './components/customToast/CustomToast'
import './App.css'
import { contactList, appointmentList } from './constants/constants'

function App() {
	const [contacts, setContacts] = useState(contactList)
	const [appointments, setAppointments] = useState(appointmentList)
	const [searchAppointments, setSearchAppointments] = useState('')
	const [searchContacts, setSearchContacts] = useState('')
	const [filteredAppointments, setFilteredAppointments] = useState(appointments)
	const [filteredContacts, setFilteredContacts] = useState(contacts)

	const [showModalAppointment, setShowModalAppointment] = useState(false)
	const [showModalContact, setShowModalContact] = useState(false)
	const [appointmentId, setAppointmentId] = useState()
	const [contactId, setContactId] = useState()
	const [elemToDelete, setElemToDelete] = useState()

	const [showToast, setShowToast] = useState(false)
	const [toastBody, setToastBody] = useState('')
	const toggleToast = () => setShowToast(!showToast)

	useEffect(() => {
		setFilteredAppointments(
			appointments.filter((appointment) => {
				return appointment.title.toLocaleLowerCase().includes(searchAppointments.toLocaleLowerCase())
			})
		)
	}, [searchAppointments, appointments])

	useEffect(() => {
		setFilteredContacts(
			contacts.filter((contact) => {
				return (
					contact.firstName.toLocaleLowerCase().includes(searchContacts.toLocaleLowerCase()) ||
					contact.lastName.toLocaleLowerCase().includes(searchContacts.toLocaleLowerCase())
				)
			})
		)
	}, [searchContacts, contacts])

	const addContact = (firstName, lastName, phone, email) => {
		setContacts((existingContact) => [...existingContact, { firstName, lastName, phone, email }])
	}

	const removeContact = (contactId) => {
		if (contactId) {
			setContactId(contactId)
			const elementToDelete = contacts.filter((element) => element.id === contactId)
			setElemToDelete(elementToDelete[0])
			setShowModalContact(true)
		}
		return null
	}

	const confirmRemoveContact = (contactId) => {
		const newContacts = contacts.filter((contact) => contact.id !== contactId)
		setContacts(newContacts)
		setShowModalContact(false)
		setToastBody('Doctor removed')
		setShowToast(true)
	}

	const addAppointment = (title, contact, date, time) => {
		setAppointments((existingAppointment) => [...existingAppointment, { title, contact, date, time }])
	}

	const removeAppointment = (appointmentId) => {
		if (appointmentId) {
			setAppointmentId(appointmentId)
			const elementToDelete = appointments.filter((element) => element.id === appointmentId)
			setElemToDelete(elementToDelete[0])
			setShowModalAppointment(true)
		}
		return null
	}

	const confirmRemoveAppointment = (appointmentId) => {
		const newAppointments = appointments.filter((appointment) => appointment.id !== appointmentId)
		setAppointments(newAppointments)
		setShowModalAppointment(false)
		setToastBody('Appointment removed')
		setShowToast(true)
	}

	const handleClose = () => {
		setShowModalAppointment(false)
		setShowModalContact(false)
	}

	return (
		<div className='App'>
			<Router>
				<NavBar />
				<Switch>
					<Route path={routes.appointments.url}>
						<AppointmentPage
							appointments={filteredAppointments}
							{...{
								contacts,
								addAppointment,
								removeAppointment,
								searchAppointments,
								setSearchAppointments,
							}}
						/>
					</Route>
					<Route path={routes.doctors.url}>
						<ContactPage {...{ addContact, removeContact, searchContacts, setSearchContacts }} contacts={filteredContacts} />
					</Route>
				</Switch>
				<Redirect exact from='/' to={routes.home.url} />
			</Router>
			<ModalDeleteAppointement {...{ handleClose, confirmRemoveAppointment, appointmentId, elemToDelete }} show={showModalAppointment} />
			<ModalDeleteContact {...{ handleClose, confirmRemoveContact, contactId, elemToDelete }} show={showModalContact} />
			{showToast && <CustomToast showToast={showToast} toggleToast={toggleToast} toastType={'success'} toastTime={'just now'} toastBody={toastBody} />}
		</div>
	)
}

export default App
