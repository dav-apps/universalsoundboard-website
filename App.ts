import express from 'express'

export class App {
	public express

	constructor() {
		this.express = express()
		this.mountRoutes()
	}

	private mountRoutes() {
		const router = express.Router()

		router.get('/', (req, res) => {
			res.send('Nothing to see here')
		})

		router.get('/upgrade', (req, res) => {
			// Check the referer header for Stripe
			if (
				req.headers.referer == null
				|| !req.headers.referer.startsWith("https://checkout.stripe.com")
			) {
				res.status(400).end()
				return
			}

			// Get the necessary url params
			let success = req.query.success == "true"
			let plan = +req.query.plan

			// Open UniversalSoundboard
			res.redirect(`universalsoundboard://upgrade?success=${success}&plan=${plan}`)
		})

		this.express.use('/', router)
	}
}