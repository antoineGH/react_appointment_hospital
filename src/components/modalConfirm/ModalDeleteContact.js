import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './ModalConfirm.css'

export default function ModalDeleteContact(props) {
	const { show, handleClose, confirmRemoveContact, contactId, elemToDelete } = props
	const title = `Are you sure you want to delete ${elemToDelete?.firstName} ${elemToDelete?.lastName}?` ?? ''

	return (
		<>
			<Modal show={show} onHide={handleClose} size='lg'>
				<Modal.Header closeButton>
					<Modal.Title>Delete Confirmation</Modal.Title>
					<button className='btn_close_custom' onClick={handleClose}>
						&times;
					</button>
				</Modal.Header>
				<Modal.Body>{title}</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Cancel
					</Button>
					<Button variant='danger' onClick={() => confirmRemoveContact(contactId)}>
						Delete
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}
