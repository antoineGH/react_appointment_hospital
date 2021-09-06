import React from 'react'
import { Button, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap'
import './CountElement.css'

export default function CountElement(props) {
	const { title, count } = props

	const renderTooltip = (props) => (
		<Tooltip id='button-tooltip' {...props}>
			{count} {title}
			{count > 1 && 's'}
		</Tooltip>
	)

	return (
		<>
			<OverlayTrigger placement='bottom' delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
				<Button variant='secondary'>
					<Badge className='badge'>{count}</Badge>
				</Button>
			</OverlayTrigger>
		</>
	)
}
