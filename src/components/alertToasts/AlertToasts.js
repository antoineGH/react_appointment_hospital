import React from 'react'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import './AlertToast.css'
import { TransitionComponent } from 'react-bootstrap'
import { Collapse } from 'react-bootstrap'

export default function AlertToasts(props) {
	const { title, time, message, show, toggleShowAlert } = props
	return (
		<ToastContainer className='' position='top-right'>
			<Toast show={show} onClose={toggleShowAlert} delay={5000} autohide animation={false}>
				<Toast.Header>
					<div className={title === 'Error' ? 'alert_custom alert_danger' : 'alert_custom alert_warning'}></div>
					<strong className='me-auto'>{title}</strong>
					<small>{time}</small>
				</Toast.Header>
				<Toast.Body>{message}</Toast.Body>
			</Toast>
		</ToastContainer>
	)
}
