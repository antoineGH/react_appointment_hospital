import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { routes } from './utils/routes'
import NavBar from './components/navBar/NavBar'
import ContactPage from './containers/contactPage/ContactPage'
import AppointmentPage from './containers/appointmentPage/AppointmentPage'
import ModalDeleteAppointement from './components/modalConfirm/ModalDeleteAppointement'
import ModalDeleteContact from './components/modalConfirm/ModalDeleteContact'
import CustomToast from './components/customToast/CustomToast'
import './App.css'

function App() {
	// CONTACTS
	const [contacts, setContacts] = useState([
		{ firstName: 'Antoine', lastName: 'Ratat', phone: '13111881660', email: 'antoine.ratat@gmail.com' },
		{ firstName: 'Bastien', lastName: 'Ratat', phone: '13111881515', email: 'bastien.ratat@gmail.com' },
	])

	const addContact = (firstName, lastName, phone, email) => {
		setContacts((existingContact) => [...existingContact, { firstName, lastName, phone, email }])
	}

	const removeContact = (position) => {
		setPosition(position)
		setElemToDelete(contacts[position - 1].firstName + ' ' + contacts[position - 1].lastName)
		setShowModalContact(true)
	}

	const confirmRemoveContact = (position) => {
		const copyContacts = contacts.slice()
		copyContacts.splice(position - 1, 1)
		setContacts(copyContacts)
		setPosition()
		setShowModalContact(false)
		setToastBody('Doctor removed')
		setShowToast(true)
	}

	// APPPOINTMENTS
	const [appointments, setAppointments] = useState([
		{ title: 'Appointment Dentist', contact: 'Antoine', date: '2021-09-17', time: '19:48' },
		{ title: 'Appointment Bank', contact: 'Bastien', date: '2021-09-17', time: '22:30' },
	])

	const addAppointment = (title, contact, date, time) => {
		setAppointments((existingAppointment) => [...existingAppointment, { title, contact, date, time }])
	}

	const removeAppointment = (position) => {
		setPosition(position)
		const elemToDelete = appointments[position - 1].title
		if (elemToDelete.length === 0) {
			return
		}
		setElemToDelete(elemToDelete)
		setShowModalAppointment(true)
	}

	const confirmRemoveAppointment = (position) => {
		const copyAppointments = appointments.slice()
		copyAppointments.splice(position - 1, 1)
		setAppointments(copyAppointments)
		setPosition()
		setShowModalAppointment(false)
		setToastBody('Appointment removed')
		setShowToast(true)
	}

	// MODALS
	const [showModalAppointment, setShowModalAppointment] = useState(false)
	const [showModalContact, setShowModalContact] = useState(false)
	const [position, setPosition] = useState()
	const [elemToDelete, setElemToDelete] = useState()

	const handleClose = () => {
		setShowModalAppointment(false)
		setShowModalContact(false)
	}

	// TOASTS
	const [showToast, setShowToast] = useState(false)
	const [toastBody, setToastBody] = useState('')
	const toggleToast = () => setShowToast(!showToast)

	return (
		<div className='App'>
			<Router>
				<NavBar />
				<Switch>
					<Route path={routes.appointments.url}>
						<AppointmentPage
							appointments={appointments}
							contacts={contacts}
							addAppointment={addAppointment}
							removeAppointment={removeAppointment}
						/>
					</Route>
					<Route path={routes.doctors.url}>
						<ContactPage contacts={contacts} addContact={addContact} removeContact={removeContact} />
					</Route>
				</Switch>
				<Redirect exact from='/' to={routes.home.url} />
			</Router>
			<ModalDeleteAppointement
				show={showModalAppointment}
				handleClose={handleClose}
				confirmRemoveAppointment={confirmRemoveAppointment}
				position={position}
				elemToDelete={elemToDelete}
			/>
			<ModalDeleteContact
				show={showModalContact}
				handleClose={handleClose}
				confirmRemoveContact={confirmRemoveContact}
				position={position}
				elemToDelete={elemToDelete}
			/>
			{showToast && <CustomToast showToast={showToast} toggleToast={toggleToast} toastType={'success'} toastTime={'just now'} toastBody={toastBody} />}
		</div>
	)
}

export default App
