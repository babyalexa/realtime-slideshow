<template>
  <div>
    <h1>{{ name }}</h1>
    <img :src="imageURL" alt="" />
    <button @click="changeImage">Change me</button>
  </div>
</template>

<script>
import io from 'socket.io-client'

const socket = io('http://localhost:3000')
export default {
  name: 'Slider',
  data: function() {
    return {
      name: '',
      imageURL: ''
    }
  },
  created: function() {
    socket.on('connect', function() {
      console.log('çonnected')
    })
    socket.on('change image', image => {
      console.log(image)
      this.name = image.name
      this.imageURL = image.imageURL
    })
  },
  methods: {
    changeImage: () => {
      socket.emit('change image')
    }
  }
}
</script>
