import express from 'express'
import path from 'path'
import url from 'url'

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

		router.get('/redirect', (req, res) => {
			// TODO: Check the referer header for Stripe
			console.log(req.headers.referer)

			// Get the necessary url params
			let success = req.query.success == "true"
			let plan = +req.query.plan

			if (
				success == null
				|| plan == null
			) {
				res.status(400).end()
				return
			}

			// Open UniversalSoundboard
			res.redirect(`universalsoundboard://accountpage?success=${success}&plan=${plan}`)
		})

		this.express.use('/', router)
	}
}