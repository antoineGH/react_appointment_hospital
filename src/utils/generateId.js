export default function generateId(object) {
	const values = Object.values(object)
	let string = ''
	values.forEach((value) => {
		string += value
	})

	var uuidv5 = require('uuidv5')
	var uuid = uuidv5('dns', string)
	return uuid
}
