const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>${process.env.MESSAGE}</h1>')
})

app.listen(8080,() => console.log('Server running on port 80'))
