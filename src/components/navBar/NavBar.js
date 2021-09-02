import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { routes } from '../../utils/routes'
import './NavBar.css'

export default function NavBar() {
	return (
		<>
			<Navbar bg='light' expand='lg'>
				<Container>
					<Navbar.Brand href='/'>Appointment Planner</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<NavLink className='nav-link' to={routes.appointments.url} exact activeClassName='current'>
								{routes.appointments.title}
							</NavLink>
							<NavLink className='nav-link' to={routes.doctors.url} exact activeClassName='current'>
								{routes.doctors.title}
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}
