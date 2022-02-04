import express from 'express'
import ejs from 'ejs'
import path from 'path'
import url from 'url'
import { getLocale } from './src/locales.js'

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
			res.set("Accept-CH", "Sec-CH-Prefers-Color-Scheme")
			res.set("Vary", "Sec-CH-Prefers-Color-Scheme")
			res.set("Critical-CH", "Sec-CH-Prefers-Color-Scheme")

			// Check the referer header for Stripe
			if (
				req.headers.referer == null
				|| !req.headers.referer.startsWith("https://checkout.stripe.com")
			) {
				res.status(400).end()
				return
			}

			let locale = getLocale(req.acceptsLanguages()[0])
			const prefersColorScheme = req.get("sec-ch-prefers-color-scheme")

			res.render("upgrade-page", {
				lang: locale.lang,
				locale: locale.upgradePage,
				darkTheme: prefersColorScheme == "dark"
			})
		})

		this.express.use('/', router)
	}
}