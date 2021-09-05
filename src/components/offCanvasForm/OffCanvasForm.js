import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import './OffCanvasForm.css'
import AppointmentForm from '../appointmentForm/AppointmentForm'
import ContactForm from '../contactForm/ContactForm'

export default function OffCanvasForm(props) {
	const { title, typeForm, showCanvas, handleCloseCanvas } = props
	return (
		<Offcanvas show={showCanvas} onHide={handleCloseCanvas}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>{title}</Offcanvas.Title>
				<button className='btn_close_custom' onClick={handleCloseCanvas}>
					&times;
				</button>
			</Offcanvas.Header>
			<Offcanvas.Body>{typeForm === 'Appointment' ? <AppointmentForm /> : <ContactForm />}</Offcanvas.Body>
		</Offcanvas>
	)
}
