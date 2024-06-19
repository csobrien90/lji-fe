type Email = `${string}@${string}.${string}`
type Permission = "admin" | "teaching-artist"
type Accounts = {[key: Email]:{roles: Permission[]}}

const accounts: Accounts = {
	"obrien.music@gmail.com": {
		roles: [
			"admin",
			"teaching-artist"
		]
	},
	"louisvillejazzinitiative@gmail.com": {
		roles: [
			"admin",
			"teaching-artist"
		]
	},
	"kianadelmusic@gmail.com": {
		roles: [
			"admin",
			"teaching-artist"
		]
	},
	"dequan.tunstull@gmail.com": {
		roles: [
			"admin",
			"teaching-artist"
		]
	},
}

const hasAccount = (email: Email) => accounts[email] ? true : false
const getRoles = (email: Email) => accounts[email].roles

export { hasAccount, getRoles }
export type { Permission }