import React from 'react'
import Tile from '../tile/Tile'

export default function TileList(props) {
	const { items, removeItems } = props

	return items.map((item, count) => {
		count++
		return <Tile key={count} position={count} item={item} removeItems={removeItems} />
	})
}
