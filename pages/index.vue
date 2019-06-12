<template>
  <v-layout column justify-center align-center>
    <v-flex>
      <img src="/img/littlemousey_greeting.png" alt="welcome little mousey" />
      <v-carousel>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://randomfox.ca/images/69.jpg'
        },
        {
          src: 'https://randomfox.ca/images/90.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  }
}
</script>
