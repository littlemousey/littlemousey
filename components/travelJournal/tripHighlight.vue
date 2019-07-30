<template>
  <div>
    <v-row v-if="textHighlightShouldComeAfter" class="my-5">
      <v-col class="mx-2" cols="12" md="5">
        <v-card v-if="imageUrl">
          <v-img
            :src="imageUrl"
            max-height="450px"
            :alt="imageDescription"
          ></v-img>
        </v-card>
      </v-col>
      <v-col class="mx-2" cols="12" md="5" align-self="center">
        <div>
          {{ text }}
        </div>
      </v-col>
    </v-row>
    <v-row v-if="!textHighlightShouldComeAfter" class="my-5">
      <v-col class="mx-2" cols="12" md="5" align-self="center">
        <div>
          {{ text }}
        </div>
      </v-col>
      <v-row class="xs12 md5 mx-2">
        <v-card v-if="imageUrl">
          <v-img :src="imageUrl" max-height="450px"></v-img>
        </v-card>
      </v-row>
    </v-row>
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
