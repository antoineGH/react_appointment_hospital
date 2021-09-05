import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './ModalConfirm.css'

export default function ModalDeleteAppointement(props) {
	const { show, handleClose, confirmRemoveAppointment, position, elemToDelete } = props

	return (
		<>
			<Modal show={show} onHide={handleClose} size='lg'>
				<Modal.Header closeButton>
					<Modal.Title>Delete Confirmation</Modal.Title>
					<button className='btn_close_custom' onClick={handleClose}>
						&times;
					</button>
				</Modal.Header>
				<Modal.Body>Are you sure you want to delete '{elemToDelete}'?</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Cancel
					</Button>
					<Button variant='danger' onClick={() => confirmRemoveAppointment(position)}>
						Delete
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}