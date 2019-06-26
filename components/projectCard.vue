<template>
  <v-flex xs12 sm6 md4>
    <v-card hover :href="demoLink" class="mx-2 my-2">
      <v-img :src="image"> </v-img>
      <v-card-title class="justify-center">
        <div>{{ text }}</div>
      </v-card-title>
      <v-card-actions>
        <v-layout align-center justify-space-around>
          <v-btn flat color="orange" :href="demoLink">Demo</v-btn>
          <v-btn flat color="orange" :href="repoUrl">Code</v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    demoLink: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: ''
    },
    repoUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
