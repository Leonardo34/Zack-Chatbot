import Express from 'express'
import facebookApi from './client/facebookAPI'

let app = new Express()

let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.logger())

app.get('/', (req, res) => {
    res.send('Ola Mundo')
})

app.get('/webhook', (req, res) => {
    if (req.query['hub.verify_token'] === '1234567890') {
        res.send(req.query['hub.challenge'])
    } else {
        res.send('Error, wrong token')
    }
})

app.post('/webhook', (req, res) => {
    const sender = req.body.entry[0].messaging[0].sender.id
    facebookApi.sendMessage(sender, 'Hello World')
    res.status(200)
    res.send()
})

let server = app.listen(3000)
console.log(server.address())