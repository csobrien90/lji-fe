import Navigation from './Navigation'
import Logo from "./Logo"
import Donate from './Donate'

const Header = () => {
  return (
	<header id="nav-wrapper">
		<div id='header'>
			<h1 className="sr-only">Louisville Jazz Initiative</h1>
			<Logo size={'large'} color='var(--white)' isLink={true} />
			<Navigation />
			{/* <Donate form={'button'} /> */}
		</div>
	</header>
  )
}

export default Header