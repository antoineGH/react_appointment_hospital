import React from 'react'
import { Row, Col, Button, Badge } from 'react-bootstrap'
import './CountElement.css'

export default function CountElement(props) {
	const { title, count } = props
	return (
		<>
			<Button variant='secondary'>
				{title}
				{count > 0 && 's'} <Badge className='badge'>{count}</Badge>
			</Button>
		</>
	)
}
