import React from 'react'
import './Tile.css'

import { Row, Col } from 'react-bootstrap'

export default function Tile(props) {
	const { item, removeItem, type } = props
	const values = Object.values(item)
	return (
		<>
			<Row className='row_tile'>
				<Col className={type === 'contacts' ? 'col_tile contacts' : 'col_tile appointements'}>
					{values.map((elem, count) => {
						count++
						if (count > 1) {
							return (
								<Col key={count} className={'text-' + count}>
									<p>{elem}</p>
								</Col>
							)
						}
						return null
					})}
					<button className='remove-button' onClick={() => removeItem(item.id)}>
						&times;
					</button>
				</Col>
			</Row>
		</>
	)
}
