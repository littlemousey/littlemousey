<template>
  <v-container>
    <v-row justify="center">
      <img
        src="/img/littlemousey_wave.png"
        alt="little mousey wave"
        class="mb-12"
      />
    </v-row>
    <v-row justify="center">
      <p class="text-center">
        Little mousey 🐭 is a small enthousiastic front-end developer. <br />
        She lives in the Netherlands 🇳🇱 <br />Little mousey's other hobbies are
        travelling, drawing, video games, photography and music.
      </p>
    </v-row>
    <v-row class="fill-height" justify="space-around">
      <v-col cols="2">
        <v-card
          hover
          href="https://github.com/littlemousey"
          color="light-green accent-2"
        >
          <v-card-text class="text-black">
            This website is built with Vue.js, Nuxt, and Vuetify. You can find
            more projects of Little mousey on
            <font-awesome-icon :icon="['fab', 'github-square']"
          /></v-card-text>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-card
          hover
          href="https://medium.com/@littlemousey"
          color="cyan accent-2"
        >
          <v-card-text class="text-black">
            Read Little mousey's articles on Medium
            <font-awesome-icon :icon="['fab', 'medium']"
          /></v-card-text>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-card
          hover
          href="https://www.linkedin.com/in/ansdenijs/"
          color="light-green accent-2"
        >
          <v-card-text class="text-black">
            If you want to know more about the person behind little mousey
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-card
          hover
          href="https://twitter.com/ansdenijs"
          color="cyan accent-2"
        >
          <v-card-text class="text-black">
            You can contact me on twitter for questions and feedback
            <font-awesome-icon :icon="['fab', 'twitter-square']" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <TripAchievements
      :title="title"
      :color="color"
      :icon="icon"
      :icon-color="iconColor"
      :achievements="technologies"
    ></TripAchievements>
  </v-container>
</template>

<script>
import TripAchievements from '@/components/travelJournal/TripAchievements'
import technologies from '@/static/data/projects/technologies'
export default {
  name: 'About',
  head() {
    return {
      title: 'About',
      meta: [
        {
          hid: 'littlemouseyabout',
          name: 'About Little mousey',
          content: 'About Little mousey'
        }
      ]
    }
  },
  components: {
    TripAchievements
  },
  data: function() {
    return {
      title: 'My Front-end technology stack',
      color: 'teal',
      icon: 'check',
      iconColor: 'green',
      technologies: technologies
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card__text {
  &.text-black {
    color: black;
  }
}
</style>
