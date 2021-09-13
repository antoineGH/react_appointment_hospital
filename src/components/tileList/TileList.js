import React from 'react'
import Tile from '../tile/Tile'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './TileList.css'

export default function TileList({ items, removeItems, type }) {
	return (
		<>
			<ReactCSSTransitionGroup transitionName='fade' transitionEnterTimeout={300} transitionLeaveTimeout={300}>
				{items.map((item) => {
					return <Tile key={item.id} item={item} removeItem={removeItems} type={type} />
				})}
			</ReactCSSTransitionGroup>
		</>
	)
}
