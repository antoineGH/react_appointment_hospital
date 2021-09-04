import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './ModalConfirm.css'

export default function ModalConfirm(props) {
	const { header, body, btnOne, btnTwo, show, handleClose } = props

	return (
		<>
			<Modal show={show} onHide={handleClose} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
				<Modal.Header closeButton>
					<Modal.Title>{header}</Modal.Title>
					<button className='btn_close_custom' onClick={handleClose}>
						&times;
					</button>
				</Modal.Header>
				<Modal.Body>{body}</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						{btnOne}
					</Button>
					<Button variant='primary' onClick={handleClose}>
						{btnTwo}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}
