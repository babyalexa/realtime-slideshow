const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const axios = require('axios')
const port = process.env.PORT || 3000
const cors = require('cors')


// imagesnya pake api aja 


async function getImage() {
    // 1492574-117623e116bf86c1dfa9e17b8
    const image = await axios.get('https://pixabay.com/api/?key=1492574-117623e116bf86c1dfa9e17b8&q=yellow+flowers&image_type=photo')
    return image.hits[0]
}


const images = [
    {
        name: 'Image Name',
        imageURL: 'https://images.unsplash.com/photo-1545401792-fc780684d94b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    }
]

app.use(cors())

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket) {
  console.log('Connected')
  io.emit('change image', images[0])
  socket.on('change image', function(msg) {
      console.log('Change request well received!')
    io.emit('change image', images[0])
  })

})

http.listen(port, function() {
  console.log('listening on *:' + port)
})


// buat algoritma untuk tampilkan gambar
// ketika connect kasih state gambar saat ini,
// ketika click next atau back ganti state gambar saat ini terus io.emit