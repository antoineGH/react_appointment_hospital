import React, { useState, useEffect } from 'react'
import { Row, Toast } from 'react-bootstrap'
import './CustomToast.css'
import { ProgressBar } from 'react-bootstrap'

export default function CustomToast(props) {
	const { showToast, toggleToast, toastType, toastTime, toastBody } = props

	const typeAlert = {
		danger: { text: 'Error', class: 'alert_danger', progress: 'danger' },
		warning: { text: 'Warning', class: 'alert_warning', progress: 'warning' },
		success: { text: 'Success', class: 'alert_success', progress: 'success' },
	}

	const [count, setCounter] = useState(0)
	useEffect(() => {
		count < 100 && setTimeout(() => setCounter(count + 2), 30)
		if (count === 100) {
			setCounter()
			setTimeout(() => {
				toggleToast()
			}, 500)
		}
	}, [count, setCounter, toggleToast])

	return (
		<Row className='row_toast'>
			<Toast show={showToast} onClose={toggleToast} delay={3000} autohide>
				<Toast.Header>
					<div className={typeAlert[toastType].class} alt=''></div>
					<strong className='me-auto'>{typeAlert[toastType].text}</strong>
					<small>{toastTime}</small>
				</Toast.Header>
				<Toast.Body>{toastBody}</Toast.Body>
				<ProgressBar animated now={count} variant={typeAlert[toastType].progress} />
			</Toast>
		</Row>
	)
}
