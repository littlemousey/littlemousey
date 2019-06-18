<template>
  <v-layout align-center justify-center column fill-height>
    <v-flex class="text-md-center">
      <h1>{{ greeting }}</h1>
      <p>
        You can find an overview of Little mousey's personal projects and
        travels on this website. <br />
        Enjoy! 🐭
      </p>
    </v-flex>
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
      greeting: 'Welcome',
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
  },
  created() {
    this.getTime()
  },
  methods: {
    getTime() {
      const date = new Date()
      const hour = date.getHours()

      if (hour) {
        this.greeting = this.setGreeting(hour)
      }
    },
    setGreeting(hour) {
      if (hour < 6) {
        return 'Good night 🌙'
      }
      if (hour < 12) {
        return 'Good morning! 🌄'
      }
      if (hour < 18) {
        return 'Good afternoon ☀️'
      } else {
        return 'Good evening 🌃'
      }
    }
  }
}
</script>
