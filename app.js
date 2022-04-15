
const http = require('http')

const server = http.createServer((req, res) => {
    //console.log('Requested')
    res.setHeader('Content-Type', 'text/plain')
    res.write('Hello !!!!')
    res.end()
})

server.listen(3000, 'localhost', (req, res) => {
    console.log("Server started");
})