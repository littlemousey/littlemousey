<template>
  <div>
    <v-layout v-if="imageLeft" row wrap my-5>
      <v-flex xs5 mx-2>
        <v-card v-if="imageUrl">
          <v-img :src="imageUrl" max-height="400px"></v-img>
        </v-card>
      </v-flex>
      <v-flex xs5 mx-2 align-self-center>
        <div>
          {{ text }}
        </div>
      </v-flex>
    </v-layout>
    <v-layout v-if="!imageLeft" row wrap my-5>
      <v-flex xs5 mx-2 align-self-center>
        <div>
          {{ text }}
        </div>
      </v-flex>
      <v-flex xs5 mx-2>
        <v-card v-if="imageUrl">
          <v-img :src="imageUrl" max-height="400px"></v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'TripHighlight',
  props: {
    imageUrl: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: ''
    },
    imageLeft: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
