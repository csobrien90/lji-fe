import Navigation from './Navigation'
import Logo from "./Logo"
import Donate from './Donate'
import { Location, useLocation } from 'react-router-dom'

const Header = () => {
	const location: Location = useLocation()

  return (
	<header id="nav-wrapper">
		<div id='header'>
			<h1 className="sr-only">Louisville Jazz Initiative</h1>
			<Logo size={'large'} color='var(--white)' />
			<Navigation />
			{location.pathname !== '/get-involved' && <Donate form={'button'} />}
		</div>
	</header>
  )
}

export default Header