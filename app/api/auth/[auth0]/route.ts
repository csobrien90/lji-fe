import { handleAuth, handleLogin, handleLogout } from "@auth0/nextjs-auth0"
import { NextApiRequest, NextApiResponse } from "next"

export const GET = handleAuth({
  async login(req: NextApiRequest, res: NextApiResponse) {
    return await handleLogin(req, res, { returnTo: "/artist-resources" })
  },
  async logout(req: NextApiRequest, res: NextApiResponse) {
	return await handleLogout(req, res, { returnTo: "/artist-resources" })
  }
})