import React from 'react'
import Tile from '../tile/Tile'

export default function TileList({ items, removeItems }) {
	return items.map((item) => {
		return <Tile key={item.id} item={item} removeItem={removeItems} />
	})
}
