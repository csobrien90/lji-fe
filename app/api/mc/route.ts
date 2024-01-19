// Import Next request and response types
import { NextRequest, NextResponse } from 'next/server'

import mailchimp from "@mailchimp/mailchimp_marketing"

mailchimp.setConfig({
	apiKey: process.env.MAILCHIMP_API_KEY,
	server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(req: NextRequest) {
	// Get email from request body
	let email: string
	try {
		let body = await req.json()
		email = body.email
	} catch (err) {
		console.error(err)
		return NextResponse.json({ status: 400 })
	}
	
	// Get Mailchimp list ID from environment variables
	const listId = process.env.MAILCHIMP_LIST_ID
	if (!listId) {
		console.error("No Mailchimp list ID provided")
		return NextResponse.json({ status: 500 })
	}

	try {
		const response = await mailchimp.lists.addListMember(listId, {
			email_address: email,
			status: 'subscribed'
		})

		// If member successfully subscribed
		if (response.hasOwnProperty('id')) {
			console.log(`Added ${email} to Mailchimp list ${listId}`)
			return NextResponse.json({ status: 200 })
		} else {
			console.error(`Mailchimp error:`, response)
			return NextResponse.json({ status: 400 })
		}
	} catch (err) {
		console.error(err)
		return NextResponse.json({ status: 500 })
	} 
}