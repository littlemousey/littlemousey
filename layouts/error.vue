<template>
  <v-app>
    <v-row v-if="error.statusCode === 404">
      <v-col class="text-center">
        <img
          src="/img/littlemousey_wave.png"
          alt="little mousey wave"
          class="mb-5"
        />
        <h1>Oops 😵</h1>
        <p>This page cannot be found 😅</p>
        <p>
          Go back to
          <NuxtLink to="/">
            Home page
          </NuxtLink>
        </p>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col class="text-center">
        <img
          src="/img/littlemousey_wave.png"
          alt="little mousey wave"
          class="mb-5"
        />
        <h1>Oops 🛑</h1>
        <p>An error has occurred, sorry for the inconvenience 🙇</p>
        <p>
          Go back to
          <NuxtLink to="/">
            Home page
          </NuxtLink>
        </p>
        <p>
          If the error happens frequently, do let me
          <a href="https://twitter.com/ansdenijs">know</a>
        </p>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: 'Page Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
