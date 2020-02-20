<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg.url" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
  </div>
</template>

<script>
import io from 'socket.io-client'

const socket = io('http://localhost:3000')
export default {
  name: 'SliderTwo',
  data: function() {
    return {
      currentIndex: 0,
      images: [
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
    }
  },
  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length]
    }
  },
  created: function() {
    socket.on('change image', index => {
      this.currentIndex = index
    })
  },
  methods: {
    next: function() {
      this.currentIndex += 1
      socket.emit('change image', this.currentIndex)
    },
    prev: function() {
      this.currentIndex -= 1
      socket.emit('change image', this.currentIndex)
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

img {
  height: 100vh;
  width: 100%;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
