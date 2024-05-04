import Navigation from './Navigation'
import Logo from "./Logo"
import MainNavCheckbox from "./MainNavCheckbox"

import styles from "../assets/styles/Header.module.css"

const Header = () => {
  return (
	<header className={styles.header}>
		<Spacer />
		<div className={styles["nav-wrapper"]}>
			<h1 className="sr-only">Louisville Jazz Initiative</h1>
			<MainNavCheckbox />
			<Navigation />
			<Logo size={'large'} color='var(--headerLogoColor, var(--dk-purple))' isLink={true} />
		</div>
	</header>
  )
}

const Spacer = () => <div className={styles.spacer} />

export default Header