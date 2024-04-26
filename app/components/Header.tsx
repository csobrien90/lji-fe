import Navigation from './Navigation'
import Logo from "./Logo"
import MainNavCheckbox from "./MainNavCheckbox"

const Header = () => {
  return (
	<header id="nav-wrapper">
		<div id='header'>
			<h1 className="sr-only">Louisville Jazz Initiative</h1>
			<MainNavCheckbox />
			<Navigation />
			<Logo size={'large'} color='var(--white)' isLink={true} />
		</div>
	</header>
  )
}

export default Header