import SlackInfo from './components/SlackInfo'
import Profile from './components/Profile'
import { getSession } from '@auth0/nextjs-auth0';
import { fetchInitialData } from '../assets/fetchInitialData';
import Events from '../components/Events';

export default async function ArtistResources() {
	const session = await getSession();
	const user = session?.user;
	console.log({user});

	const isLoggedIn = user ? true : false;

	if (!isLoggedIn) {
		return (
			<main>
				<h1>Artist Resources</h1>
				<a href="/api/auth/login">Login</a>
			</main>
		)
	}

	const { events } = await fetchInitialData();

	const adminEmails = [
		'obrien.music@gmail.com',
		'louisvillejazzinitiative@gmail.com'
	]

	const cmsUrl = "https://louisville-jazz-initiative.sanity.studio/"
	
	return (
		<main>
			<h1>Artist Resources</h1>
			{isLoggedIn && <a href="/api/auth/logout">Logout</a>}
			<Profile user={user} />
			{
				user && user.email && adminEmails.includes(user.email) && (
					<a href={cmsUrl} target='_blank'>Manage Content</a>
				)
			}
			{
				events && events.length > 0 && <Events events={events} showPrivateEvents={true} />
			}
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