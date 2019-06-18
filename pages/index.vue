<template>
  <v-layout align-center justify-center column fill-height>
    <v-flex>
      <img src="/img/haveamiceday.png" alt="Have a mice day" />
    </v-flex>
    <v-flex>
      <img src="/img/littlemousey_greeting.png" alt="welcome little mousey" />
    </v-flex>
    <!-- <v-carousel>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel> -->
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: '/img/haveamiceday.png'
        },
        {
          src: '/img/hello_littlemousey.png'
        },
        {
          src: '/img/javascript_for_mice.png'
        }
      ]
    }
  }
}
</script>
