let http = require('http')
let url = require('url')
let fs = require('fs')

http.createServer((req, res) => {
    let q = url.parse(req.url, true)
    let filename = '.' + q.pathname + '.html'
    readFile(filename, res)
}).listen(8080)

function readFile (filename, res) {
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(302, {'Content-Type': 'text/html'})
            readFile('./404.html', res)
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        }
    })
}