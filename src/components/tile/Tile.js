import React from 'react'
import './Tile.css'
import { Row, Col } from 'react-bootstrap'

export default function Tile(props) {
	const { item, removeItem, position } = props
	const values = Object.values(item)
	console.log(values)
	return (
		<Row className='row_tile'>
			{values.map((elem, count) => {
				count++
				return (
					<Col key={count}>
						<p>{elem}</p>
					</Col>
				)
			})}
			<button className='remove-button' onClick={() => removeItem(position)}>
				&times;
			</button>
		</Row>
	)
}
