import express from "express"
import ejs from "ejs"
import path from "path"
import url from "url"
import { getLocale } from "./src/locales.js"

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
		this.express.engine("html", ejs.renderFile)
		this.express.set("views", path.join(__dirname, "src/pages"))

		router.use(express.static(path.join(__dirname, "src/pages")))
		router.use(express.json())

		router.get("/", (req, res) => {
			res.redirect("https://dav-apps.tech")
		})

		router.get("/upgrade", (req, res) => {
			res.set("Accept-CH", "Sec-CH-Prefers-Color-Scheme")
			res.set("Vary", "Sec-CH-Prefers-Color-Scheme")
			res.set("Critical-CH", "Sec-CH-Prefers-Color-Scheme")

			let locale = getLocale(req.acceptsLanguages()[0])
			const prefersColorScheme = req.get("sec-ch-prefers-color-scheme")
			let success = req.query.success == "true"

			res.render("upgrade-page/upgrade-page.html", {
				lang: locale.lang,
				locale: locale.upgradePage,
				darkTheme: prefersColorScheme == "dark",
				success
			})
		})

		router.get("/sound-promotion", (req, res) => {
			res.set("Accept-CH", "Sec-CH-Prefers-Color-Scheme")
			res.set("Vary", "Sec-CH-Prefers-Color-Scheme")
			res.set("Critical-CH", "Sec-CH-Prefers-Color-Scheme")

			let locale = getLocale(req.acceptsLanguages()[0])
			const prefersColorScheme = req.get("sec-ch-prefers-color-scheme")
			let success = req.query.success == "true"

			res.render("sound-promotion-page/sound-promotion-page.html", {
				lang: locale.lang,
				locale: locale.soundPromotionPage,
				darkTheme: prefersColorScheme == "dark",
				success
			})
		})

		this.express.use("/", router)
	}
}
