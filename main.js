const express = require('express')
const app = express()
const port = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
  res.send('This is an extremely advanced web server made with the latest Node.JS with the Express.JS library that I have used to test an epic hosting service. <br><img src="https://preview.redd.it/anyone-have-the-nerd-dog-in-hq-v0-bxogra5liksb1.jpeg?width=778&format=pjpg&auto=webp&s=303219bd0d011416895b793a9544429210ce07ec">')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})