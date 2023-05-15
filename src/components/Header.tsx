import Navigation from './Navigation'
import Logo from "./Logo"
import Donate from './Donate'
import { Location, useLocation } from 'react-router-dom'

const Header = () => {
	const location: Location = useLocation()

  return (
	<header>
		<h1>Louisville Jazz Initiative</h1>
		<Logo size={'large'} />
		<Navigation />
		{location.pathname !== '/get-involved' && <Donate form={'button'} />}
	</header>
  )
}

export default Header