import React from 'react'
import { Offcanvas } from 'react-bootstrap'

export default function OffCanvasForm(props) {
	const { showCanvas, handleCloseCanvas } = props
	return (
		<Offcanvas show={showCanvas} onHide={handleCloseCanvas}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Offcanvas</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</Offcanvas.Body>
		</Offcanvas>
	)
}
