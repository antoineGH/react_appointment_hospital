import React, { useState, useEffect } from 'react'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import './AlertToast.css'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function AlertToasts(props) {
	const { title, time, message, show, toggleShowAlert } = props

	const [count, setCounter] = useState(100)

	const typeAlert = {
		danger: { text: 'Error', class: 'alert_danger' },
		warning: { text: 'Warning', class: 'alert_warning' },
		success: { text: 'Success', class: 'alert_success' },
	}

	useEffect(() => {
		count > 0 && setTimeout(() => setCounter(count - 2), 50)
	}, [count])

	return (
		<ToastContainer className='toast_container' position='top-right'>
			<Toast show={show} onClose={toggleShowAlert} delay={3000} autohide animation={false}>
				<Toast.Header>
					<div className={typeAlert[title].class}></div>
					<strong className='me-auto'>{typeAlert[title].text}</strong>
					<small>{time}</small>
					<button onClick={toggleShowAlert} type='button' class='btn-close_custom' aria-label='Close' data-dismiss='toast'>
						x
					</button>
				</Toast.Header>
				<Toast.Body>{message}</Toast.Body>
				<ProgressBar variant={title} now={count} />
			</Toast>
		</ToastContainer>
	)
}
