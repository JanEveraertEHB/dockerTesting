const express = require('express')
const app = express()
const port = 3000

//console.log("starting up - main")

app.get('/', (req, res) => {
  res.send('Hello World!')
})


/**
*  ping / pong for server testing
*
*/
app.get('/ping', (req, res) => {
  res.send('Hello pong!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

