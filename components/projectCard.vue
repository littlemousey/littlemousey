<template>
  <v-col cols="12" sm="6" md="4">
    <v-card hover :href="demoLink" class="mx-2 my-2">
      <v-img :src="image"> </v-img>
      <v-card-title class="justify-center">
        <div class="title">{{ text }}</div>
      </v-card-title>
      <v-card-actions>
        <v-row align="center" justify="space-around">
          <v-btn text color="orange" :href="demoLink">Demo</v-btn>
          <v-btn text color="orange" :href="repoUrl">Code</v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-col>
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
