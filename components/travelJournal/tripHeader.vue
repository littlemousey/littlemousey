<template>
  <div>
    <v-row align="start" justify="center">
      <v-col cols="12">
        <v-card class="my-5">
          <v-img class="white--text" :src="imgUrl" height="300">
            <v-card-title class="align-end fill-height">{{
              title
            }}</v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center"
      ><h1 class="display-3 text-center">{{ title }}</h1></v-row
    >
    <v-row class="my-10" justify="center">
      <v-col cols="10" md="6"
        ><div class="text-center">{{ text }}</div></v-col
      >
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'TripHeader',
  props: {
    imgUrl: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped></style>
