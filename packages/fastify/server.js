const app = require('fastify')()
app.use(require('serve-static')(
  require('path').resolve('public')
))
app.listen(8080, '0.0.0.0', () => {
  console.log('Go to http://localhost:8080')
})