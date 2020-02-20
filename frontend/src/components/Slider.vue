<template>
  <div class="container">
    <img :src="imageURL" alt="" />
    <button @click="changeImage" class="btn">Change Me!</button>
  </div>
</template>

<script>
import io from 'socket.io-client'

const socket = io('http://localhost:3000')
export default {
  name: 'Slider',
  data: function() {
    return {
      imageURL: ''
    }
  },
  created: function() {
    socket.on('change image', image => {
      this.imageURL = image.url
    })
  },
  methods: {
    changeImage: () => {
      socket.emit('change image')
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.container {
  position: relative;
  width: 100%;
}

.container img {
  width: 100%;
  height: 100vh;
}

.container .btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.container .btn:hover {
  background-color: black;
}
</style>
