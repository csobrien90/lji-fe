import translate from "@/app/hooks/translation"

export default async function Profile({ user }: { user: any }) {
	const { t } = translate()
	return (
		user && (
			<div>
				<h2>{t("profileTitle", {name: user.name})}</h2>
				<img src={user.picture} alt={user.name} />
				<p>{user.email}</p>
			</div>
		)
	)
}