const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello body')
})

app.listen(3000,() => console.log('Server running on port 80'))
