const http = require('http')
const url = require('url')
const fsPromises = require('fs').promises
const fs = require('fs')

const stlyesPage = fs.readFileSync('./styles.css')
const errorPage = fs.readFileSync('./pages/404.html')

const app = http.createServer(async (req, res) => {
	let fileHandle
	if (req.url === '/styles.css') {
		res.writeHead(200, { 'Content-Type': 'text/css' })
		res.end(stlyesPage)
	} else {
		let valor = req.url === '/' ? 'index' : req.url
		fileHandle = await fsPromises
			.readFile(`./pages/${valor}.html`)
			.then(data => {
				res.writeHead(200, { 'Content-Type': 'text/html' })
				res.end(data)
			})
			.catch(data => {
				res.writeHead(200, { 'Content-Type': 'text/html' })
				res.end(errorPage)
			})
	}
})

const PORT = 3000

app.listen(PORT)
