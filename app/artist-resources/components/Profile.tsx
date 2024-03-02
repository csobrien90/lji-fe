export default async function Profile({ user }: { user: any }) {
	return (
		user && (
			<div>
				<h2>{user.name}'s Profile</h2>
				<img src={user.picture} alt={user.name} />
				<p>{user.email}</p>
			</div>
		)
	)
}