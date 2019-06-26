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
  </v-layout>
</template>

<script>
export default {
  name: 'Homepage',
  data() {
    return {
      greeting: 'Welcome'
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
