import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { routes } from './utils/routes'
import NavBar from './components/navBar/NavBar'
import ContactPage from './containers/contactPage/ContactPage'
import AppointmentPage from './containers/appointmentPage/AppointmentPage'

function App() {
	return (
		<div className='App'>
			<Router>
				<NavBar />
				<Switch>
					<Route path={routes.appointments.url}>
						<AppointmentPage />
					</Route>
					<Route path={routes.doctors.url}>
						<ContactPage />
					</Route>
				</Switch>
				<Redirect exact from='/' to={routes.appointments.url} />
			</Router>
		</div>
	)
}

export default App
