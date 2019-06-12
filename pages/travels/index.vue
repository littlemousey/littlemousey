<template>
  <v-layout>
    <v-flex text-xs-center>
      <img
        src="/img/littlemousey_wave.png"
        alt="little mousey wave"
        class="mb-5"
      />
      <h1>This mouse loves traveling and exploring the world</h1>
      <p>
        You can find some of my travels here. I will add more posts of my
        travels later
      </p>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Schiermonnikoog</h3>
            <div>{{ card_text }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange" small nuxt to="/travels/test"
            >Explore</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      card_text: 'Quiet island named after the monks'
    }
  }
}
</script>
