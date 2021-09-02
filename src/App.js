import './App.css'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { routes } from './utils/routes'
import NavBar from './components/navBar/NavBar'
import ContactPage from './containers/contactPage/ContactPage'
import AppointmentPage from './containers/appointmentPage/AppointmentPage'
import { Container } from 'react-bootstrap'

function App() {
	console.log(routes)
	return (
		<div className='App'>
			<Router>
				<NavBar />
				<Switch>
					<Route path='/'></Route>
				</Switch>
				<Redirect exact from='/' to='searchDashboard' />
			</Router>
		</div>
	)
}

export default App
