<template>
  <v-flex xs12 sm5 md3 mx-2 mt-4>
    <v-card hover nuxt :to="link">
      <v-img :src="imageUrl"></v-img>

      <v-card-title primary-title>
        <div>
          {{ title }}
        </div>
        <div class="grey--text subtitle-1">{{ text }}</div>
      </v-card-title>

      <v-card-actions>
        <v-btn text color="orange" small nuxt :to="link">{{
          buttonText
        }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'DestinationCard',
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: ''
    }
  }
}
</script>
