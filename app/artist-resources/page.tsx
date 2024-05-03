import Profile from './components/Profile'
import { getSession } from '@auth0/nextjs-auth0';
import { fetchInitialData } from '../assets/fetchInitialData';
import Events from '../components/Events';
import Grants from './components/Grants';
import ResourceLinks from './components/ResourceLinks';

import translate from '../hooks/translation';

export default async function ArtistResources() {
	const session = await getSession();
	const user = session?.user;

	const { t } = translate();

	const isLoggedIn = user ? true : false;

	if (!isLoggedIn) {
		return (
			<main>
				<h1>{t("artistResourcesTitle")}</h1>
				<a href="/api/auth/login">{t("login")}</a>
			</main>
		)
	}

	const { events, grants } = await fetchInitialData();
	
	return (
		<main>
			<h1>{t("artistResourcesTitle")}</h1>
			<a href="/api/auth/logout">{t("logout")}</a>
			<Profile user={user} />
			{events && events.length > 0 && <Events events={events} showPrivateEvents={true} />}
			{grants && grants.length > 0 && <Grants grants={grants} />}
			<ResourceLinks user={user} />
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