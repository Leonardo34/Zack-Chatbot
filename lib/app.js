import express from 'express'

let app = express()
app.use(express.logger())

app.get('/', (req, res) => {
    res.send('Ola Mundo')
})

var server = app.listen(3000)
console.log(server.address())