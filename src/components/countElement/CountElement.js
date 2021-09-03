import React from 'react'
import { Row, Col, Button, Badge } from 'react-bootstrap'
import './CountElement.css'

export default function CountElement(props) {
	const { title, count } = props
	return (
		<>
			<Row className='mt-3'>
				<Col className='col_count'>
					<Button variant='primary'>
						{title} <Badge className='badge'>{count}</Badge>
					</Button>
				</Col>
			</Row>
		</>
	)
}
