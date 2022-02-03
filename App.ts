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

		this.express.use('/', router)
	}
}