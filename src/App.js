import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { routes } from './utils/routes'
import NavBar from './components/navBar/NavBar'
import ContactPage from './containers/contactPage/ContactPage'
import AppointmentPage from './containers/appointmentPage/AppointmentPage'
import './App.css'

function App() {
	const [contacts, setContacts] = useState([
		{ firstName: 'Antoine', lastName: 'Ratat', phone: '13111881660', email: 'antoine.ratat@gmail.com' },
		{ firstName: 'Bastien', lastName: 'Ratat', phone: '13111881515', email: 'bastien.ratat@gmail.com' },
	])

	const [appointments, setAppointments] = useState([
		{ title: 'Appointment Dentist', contact: 'Antoine', date: '02/09/21', time: '19:48' },
		{ title: 'Appointment Bank', contact: 'Bastien', date: '04/10/21', time: '22:30' },
	])

	const addContact = (firstName, lastName, phone, email) => {
		setContacts((existingContact) => [...existingContact, { firstName, lastName, phone, email }])
	}

	const removeContact = (position) => {
		const copyContacts = contacts.slice()
		copyContacts.splice(position - 1, 1)
		setContacts(copyContacts)
	}

	const addAppointment = (title, contact, date, time) => {
		setAppointments((existingAppointment) => [...existingAppointment, { title, contact, date, time }])
	}

	const removeAppointment = (position) => {
		const copyAppointments = appointments.slice()
		copyAppointments.splice(position - 1, 1)
		setAppointments(copyAppointments)
	}

	return (
		<div className='App'>
			<Router>
				<NavBar />
				<Switch>
					<Route path={routes.appointments.url}>
						<AppointmentPage />
					</Route>
					<Route path={routes.doctors.url}>
						<ContactPage />
					</Route>
				</Switch>
				<Redirect exact from='/' to={routes.appointments.url} />
			</Router>
		</div>
	)
}

export default App
