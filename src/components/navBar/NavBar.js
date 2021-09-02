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
					<Navbar.Brand>Appointment Planner</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<NavLink className='nav-link' to={routes.doctors} exact activeClassName='current'>
								Appointments
							</NavLink>
							<NavLink className='nav-link' to={routes.appointments} exact activeClassName='current'>
								Doctors
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}
