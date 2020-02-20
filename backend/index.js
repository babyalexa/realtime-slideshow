const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 3000
const cors = require('cors')

app.use(cors())

let index = 0

io.on('connection', function(socket) {
  io.emit('change image', index)
  socket.on('change image', function(i) {
    index = i
    io.emit('change image', index)
  })
})

http.listen(port, function() {
  console.log('listening on *:' + port)
})
