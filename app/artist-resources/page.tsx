import SlackInfo from './components/SlackInfo'
import Profile from './components/Profile'
import { getSession } from '@auth0/nextjs-auth0';

export default async function ArtistResources() {
	const session = await getSession();
	const user = session?.user;
	console.log({session, user});

	const isLoggedIn = user ? true : false;
	
	return (
		<main>
			<h1>Artist Resources</h1>
			{isLoggedIn && <a href="/api/auth/logout">Logout</a>}
			{!isLoggedIn && <a href="/api/auth/login">Login</a>}
			<Profile user={user} />
			{/* 
				<SlackInfo />
				Artist only events
				Submit An Event
				Gear Share/Google Drive links
				Grants and opportunities
				Manage gigs
			*/}
		</main>
	)
}