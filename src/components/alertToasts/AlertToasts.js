import React from 'react'
import Toast from 'react-bootstrap/Toast'
import './AlertToast.css'

export default function AlertToasts(props) {
	const { title, time, message, show, toggleShowAlert } = props
	return (
		<Toast show={show} onClose={toggleShowAlert}>
			<Toast.Header>
				<div className={title === 'Error' ? 'alert_custom alert_danger' : 'alert_custom alert_warning'}></div>
				<strong className='me-auto'>{title}</strong>
				<small>{time}</small>
			</Toast.Header>
			<Toast.Body>{message}</Toast.Body>
		</Toast>
	)
}
