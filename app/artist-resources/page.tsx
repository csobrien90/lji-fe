import Profile from './components/Profile'
import { getSession } from '@auth0/nextjs-auth0';
import { fetchInitialData } from '../assets/fetchInitialData';
import Events from '../components/Events';
import Grants from './components/Grants';
import ResourceLinks from './components/ResourceLinks';

import translate from '../hooks/translation';
import { hasAccount, getRoles } from './accounts';

export default async function ArtistResources() {
	const { t } = translate();

	// Get the user and session
	const session = await getSession();
	let user = session?.user;

	if (!user || !user?.email) {
		return (
			<main>
				<h1>{t("artistResourcesTitle")}</h1>
				<a href="/api/auth/login">{t("login")}</a>
			</main>
		)
	}

	// Check if the user has an account
	const userAccountExists = hasAccount(user.email);

	if (!userAccountExists) {
		return (
			<main>
				<h1>{t("artistResourcesTitle")}</h1>
				<p>{t("forbidden")}</p>
				<a href="/api/auth/logout">{t("logout")}</a>
			</main>
		)
	}

	// Get the user's roles
	const roles = getRoles(user.email);
	const isTeachingArtist = roles.includes("teaching-artist");

	// Fetch the initial data
	const { events, grants } = await fetchInitialData();
	
	return (
		<main>
			<h1>{t("artistResourcesTitle")}</h1>
			<a href="/api/auth/logout">{t("logout")}</a>
			<Profile user={user} />
			{events && events.length > 0 && <Events events={events} showPrivateEvents={true} />}
			{isTeachingArtist && grants && grants.length > 0 && <Grants grants={grants} />}
			<ResourceLinks user={user} roles={roles} />
			{/* 

				New Tools to build:
					Gear Share (Google Drive/Sheets link? Embedded table?)
					Submit An Event
					Gig manager
				Pending decisions:
					<SlackInfo />
				Ideas:
					Space reservation
					Staff directory

			*/}
		</main>
	)
}