import React from 'react'
import './Tile.css'

import { Row, Col } from 'react-bootstrap'

export default function Tile(props) {
	const { item, removeItem } = props
	const values = Object.values(item)
	return (
		<Row className='row_tile'>
			{values.map((elem, count) => {
				count++
				if (count > 1) {
					return (
						<Col key={count}>
							<p>{elem}</p>
						</Col>
					)
				}
				return null
			})}
			<button className='remove-button' onClick={() => removeItem(item.id)}>
				&times;
			</button>
		</Row>
	)
}
