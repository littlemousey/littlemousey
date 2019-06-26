<template>
  <v-layout row wrap align-start justify-center>
    <v-flex xs12>
      <v-card class="my-2">
        <v-img class="white--text" :src="imgUrl" height="300">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{ title }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
      </v-card>
    </v-flex>
    <v-flex xs6 my-5>
      <div>{{ text }}</div>
    </v-flex>
  </v-layout>
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
