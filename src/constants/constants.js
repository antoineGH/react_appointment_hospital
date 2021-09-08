import generateId from '../utils/generateId'

const contactList = [
	{
		id: generateId({ firstName: 'Antoine', lastName: 'Ratat', phone: '13111881660', email: 'antoine.ratat@gmail.com' }),
		firstName: 'Antoine',
		lastName: 'Ratat',
		phone: '13111881660',
		email: 'antoine.ratat@gmail.com',
	},
	{
		id: generateId({ firstName: 'Bastien', lastName: 'Ratat', phone: '13111881515', email: 'bastien.ratat@gmail.com' }),
		firstName: 'Bastien',
		lastName: 'Ratat',
		phone: '13111881515',
		email: 'bastien.ratat@gmail.com',
	},
]

const appointmentList = [
	{
		id: generateId({ title: 'Appointment Dentist', contact: 'Antoine', date: '2021-09-17', time: '19:48' }),
		title: 'Appointment Dentist',
		contact: 'Antoine',
		date: '2021-09-17',
		time: '19:48',
	},
	{
		id: generateId({ title: 'Appointment Bank', contact: 'Bastien', date: '2021-09-17', time: '22:30' }),
		title: 'Appointment Bank',
		contact: 'Bastien',
		date: '2021-09-17',
		time: '22:30',
	},
]

export { contactList, appointmentList }
