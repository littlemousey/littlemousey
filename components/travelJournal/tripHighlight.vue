<template>
  <div>
    <v-layout v-if="textHighlightShouldComeAfter" row wrap my-5>
      <v-flex xs12 md5 mx-2>
        <v-card v-if="imageUrl">
          <v-img
            :src="imageUrl"
            max-height="450px"
            :alt="imageDescription"
          ></v-img>
        </v-card>
      </v-flex>
      <v-flex xs12 md5 mx-2 align-self-center>
        <div>
          {{ text }}
        </div>
      </v-flex>
    </v-layout>
    <v-layout v-if="!textHighlightShouldComeAfter" row wrap my-5>
      <v-flex xs12 md5 mx-2 align-self-center>
        <div>
          {{ text }}
        </div>
      </v-flex>
      <v-flex xs12 md5 mx-2>
        <v-card v-if="imageUrl">
          <v-img :src="imageUrl" max-height="450px"></v-img>
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
    },
    imageDescription: {
      type: String,
      default: ''
    }
  },
  computed: {
    textHighlightShouldComeAfter() {
      return this.imageLeft || this.$vuetify.breakpoint.name === 'xs'
    }
  }
}
</script>

<style lang="scss" scoped></style>
