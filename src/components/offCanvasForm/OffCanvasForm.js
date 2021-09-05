import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import './OffCanvasForm.css'
import AppointmentForm from '../appointmentForm/AppointmentForm'
import ContactForm from '../contactForm/ContactForm'

export default function OffCanvasForm(props) {
	const {
		titleCanvas,
		typeForm,
		showCanvas,
		handleCloseCanvas,
		firstName,
		setFirstName,
		lastName,
		setLastName,
		phone,
		setPhone,
		email,
		setEmail,
		title,
		setTitle,
		contacts,
		setContact,
		date,
		setDate,
		time,
		setTime,
		handleSubmit,
	} = props
	return (
		<Offcanvas show={showCanvas} onHide={handleCloseCanvas}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>{titleCanvas}</Offcanvas.Title>
				<button className='btn_close_custom' onClick={handleCloseCanvas}>
					&times;
				</button>
			</Offcanvas.Header>
			<Offcanvas.Body>
				{typeForm === 'Appointment' ? (
					<AppointmentForm
						title={title}
						setTitle={setTitle}
						contacts={contacts}
						setContact={setContact}
						date={date}
						setDate={setDate}
						time={time}
						setTime={setTime}
						handleSubmit={handleSubmit}
					/>
				) : (
					<ContactForm
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
				)}
			</Offcanvas.Body>
		</Offcanvas>
	)
}
