const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 3000
const cors = require('cors')

const images = [
  {
    url:
      'https://images.unsplash.com/photo-1545450659-8f9ecd13559d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600'
  },
  {
    url:
      'https://images.unsplash.com/photo-1581814879111-b2e6a6bd5d18?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixlib=rb-1.2.1&q=80&w=1600'
  },
  {
    url:
      'https://images.unsplash.com/photo-1581891528608-ee7658131327?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixlib=rb-1.2.1&q=80&w=1600'
  },
  {
    url:
      'https://images.unsplash.com/photo-1581529666870-2121844fa0da?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixlib=rb-1.2.1&q=80&w=1600'
  },
  {
    url:
      'https://images.unsplash.com/photo-1579802655076-f5703b2f2aba?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixlib=rb-1.2.1&q=80&w=1600'
  },
  {
    url:
      'https://images.unsplash.com/photo-1579722364524-7bb42661d4b0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixlib=rb-1.2.1&q=80&w=1600'
  },
  {
    url:
      'https://images.unsplash.com/photo-1579619312739-8d373e647330?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixlib=rb-1.2.1&q=80&w=1600'
  },
  {
    url:
      'https://images.unsplash.com/photo-1580206699674-022d394da0c1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixlib=rb-1.2.1&q=80&w=1600'
  },
  {
    url:
      'https://images.unsplash.com/photo-1580219125213-8fca3cdcb885?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixlib=rb-1.2.1&q=80&w=1600'
  },
  {
    url:
      'https://images.unsplash.com/photo-1580029402599-3767ef474e4d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixlib=rb-1.2.1&q=80&w=1600'
  }
]

app.use(cors())

io.on('connection', function(socket) {
  io.emit('change image', images[Math.floor(Math.random() * 10)])
  socket.on('change image', function(msg) {
    io.emit('change image', images[Math.floor(Math.random() * 10)])
  })
})

http.listen(port, function() {
  console.log('listening on *:' + port)
})
