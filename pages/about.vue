<template>
  <v-container>
    <v-layout align-center column>
      <v-flex>
        <img
          src="/img/littlemousey_wave.png"
          alt="little mousey wave"
          class="mb-5"
        />
      </v-flex>
      <v-flex>
        <p class="text-md-center">
          Little mousey 🐭 is a small enthousiastic front-end developer. <br />
          She lives in the Netherlands 🇳🇱 <br />Little mousey's other hobbies
          are travelling, drawing, video games, photography and music.
        </p>
      </v-flex>
    </v-layout>
    <v-layout align-space-around justify-space-around row fill-height>
      <v-flex xs4 mx-2>
        <v-card
          hover
          href="https://github.com/littlemousey"
          color="blue lighten-5"
        >
          <v-card-text>
            This website is built with Vue.js, Nuxt, and Vuetify. You can find
            more projects of Little mousey on
            <font-awesome-icon :icon="['fab', 'github-square']"
          /></v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 mx-2>
        <v-card
          hover
          href="https://medium.com/@littlemousey"
          color="amber lighten-5"
        >
          <v-card-text>
            Read Little mousey's articles on Medium
            <font-awesome-icon :icon="['fab', 'medium']"
          /></v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 mx-2>
        <v-card
          hover
          href="https://www.linkedin.com/in/ansdenijs/"
          color="blue lighten-5"
        >
          <v-card-text>
            If you want to know more about the person behind little mousey
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 mx-2>
        <v-card
          hover
          href="https://twitter.com/ansdenijs"
          color="amber lighten-5"
        >
          <v-card-text>
            You can contact me on twitter for questions and feedback
            <font-awesome-icon :icon="['fab', 'twitter-square']" />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped></style>
