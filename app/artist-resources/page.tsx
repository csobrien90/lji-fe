import Profile from './components/Profile'
import { getSession } from '@auth0/nextjs-auth0';
import { fetchInitialData } from '../assets/fetchInitialData';
import Events from '../components/Events';
import Grants from './components/Grants';
import ResourceLinks from './components/ResourceLinks';

import useTranslate from '../hooks/translation';
import { hasAccount, getRoles } from './accounts';
import Link from 'next/link';

export default async function ArtistResources() {
	const { t } = useTranslate();

	// Get the user and session
	const session = await getSession();
	let user = session?.user;

	if (!user || !user?.email) {
		return (
			<main>
				<h1>{t("artistResourcesTitle")}</h1>
				<Link href="/api/auth/login">{t("login")}</Link>
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
				<Link href="/api/auth/logout">{t("logout")}</Link>
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