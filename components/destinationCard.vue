<template>
  <v-col cols="12" sm="5" md="3">
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
  </v-col>
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
