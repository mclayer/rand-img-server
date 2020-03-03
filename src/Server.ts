import http from 'http'
import { URL } from 'url'
const imgGen:any = require('js-image-generator');

type ServerOptions = {
	port: number
}

class HttpError extends Error {
	constructor(public readonly statusCode: number, public readonly message: string) {
		super()
	}
}

export class Server {
	private server: http.Server

	constructor( private options: ServerOptions ) {
		this.server = this.start()
		console.log(`Listening port ${this.options.port}`)
	}

	private start() {
		return http
			.createServer((req, res) => {
				try {
					console.info('New request:' + req.url)
					if (req.url === undefined) {
						throw new HttpError(400, 'no url')
					}
					const url = new URL(req.url, 'http://localhost')
					if (url.pathname === '/favicon.ico') {
						// fucking bloody fucking favicon
						res.end();
						return;
					}

					if (url.pathname === '') {
						throw new HttpError(400, 'wrong pathname')
					}
					if (!url.searchParams.has('width') || !url.searchParams.has('height') || !url.searchParams.has('quality')) {
						throw new HttpError(400, 'no width/height/quality')
					}
					imgGen.generateImage(url.searchParams.get('width'), url.searchParams.get('height'), url.searchParams.get('quality'), (err: any, image: any) => {
						res.write(image.data, (err:any) => {
							res.end()
						})
					})

				} catch(e) {
					console.warn(e)
					if (e !instanceof HttpError) {
						e = new HttpError(400, e.message)
					}
					res.statusCode = e.statusCode
					res.write(`Error ${e.statusCode}: ${e.message}`)
					res.end()
				}
			})
			.listen(this.options.port)
	}
}
