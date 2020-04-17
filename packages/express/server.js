const app = require('express')()
app.use(require('express').static(
  require('path').join(__dirname, 'public')
))
app.listen(8080, () => {
  console.log('Go to http://localhost:8080')
})