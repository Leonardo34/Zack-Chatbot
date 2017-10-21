import express from 'express'

let app = express()
app.use(express.logger())

app.get('/', (req, res) => {
    res.send('Ola Mundo')
})

app.get('/webhook', (req, res) => {
    console.log(req)
    if (req.query['hub.verify_token'] === '1234567890') {
        res.send(req.query['hub.challenge'])
    } else {
        res.send('Error, wrong token')
    }
})

app.post('/webhook', (req, res) => {
    console.log(req)
})

var server = app.listen(3000)
console.log(server.address())