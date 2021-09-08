import React from 'react'
import { Button, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap'
import './CountElement.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

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
					<FontAwesomeIcon className='ml-2' size='1x' icon={['fas', title === 'Appointment' ? 'calendar-check' : 'address-book']} />
				</Button>
			</OverlayTrigger>
		</>
	)
}
