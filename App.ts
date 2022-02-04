import express from 'express'
import ejs from 'ejs'
import path from 'path'
import url from 'url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

export class App {
	public express

	constructor() {
		this.express = express()
		this.mountRoutes()
	}

	private mountRoutes() {
		const router = express.Router()

		this.express.set("view engine", "html")
		this.express.engine('html', ejs.renderFile)
		this.express.set('views', path.join(__dirname, 'src/pages'))

		router.use(express.static(path.join(__dirname, 'src/pages')))
		router.use(express.json())

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

			// Open UniversalSoundboard
			res.render("upgrade-page")
		})

		this.express.use('/', router)
	}
}