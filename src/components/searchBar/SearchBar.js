import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function SearchBar(props) {
	const { type } = props
	return (
		<div>
			<FontAwesomeIcon className='ml-1' size='1x' icon={['fas', 'search']} />
		</div>
	)
}
