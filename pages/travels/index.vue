<template>
  <section class="travel">
    <v-layout mb-5 justify-center>
      <v-flex xs8 md12 mt-2>
        <leafletmap :markers="allMarkersCombined"></leafletmap>
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-flex xs12 md6 text-xs-center>
        <h1>This mouse loves traveling and exploring the world</h1>
        <p>
          Whenever I travel, I take a lot of pictures of the sights and culture
          and environment 📷. I thought it would be nice to share these photos
          and my learnings with others, otherwise it would just get wasted on my
          hard disk. You can find some journals of my travels here and maybe you
          get some inspiration for your next trip... 😊
        </p>
        <p>
          Click
          <NuxtLink to="/travels/bigMap">here</NuxtLink> for a bigger version of
          the map 🗺️
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap align-content-center>
      <destination-card
        v-for="destination in destinations"
        :key="destination.title"
        :title="destination.title"
        :text="destination.text"
        :image-url="destination.image"
        :link="destination.link"
        :button-text="destination.button"
      ></destination-card>
    </v-layout>
    <v-layout row justify-center>
      <v-flex sx12 md6 my-5>
        <span
          >If you are interested in old journals of mine (in Dutch) about my
          travels in 🇯🇵Japan, 🇷🇺Russia and 🇨🇳China: go to
        </span>
        <span
          ><a href="https://ansdenijs.waarbenjij.nu/">waarbenjij.nu</a>🧭</span
        >
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import locations from '~/static/data/locations/locations-eu'
import locationsNL from '~/static/data/locations/locations-nl'
import locationsAsia from '~/static/data/locations/locations-asia'
import locationsOld from '~/static/data/locations/locations-until-2010'
import destinationCard from '~/components/destinationCard'
import Leafletmap from '~/components/leafletmap'
import destinations from '~/static/data/destinations/destinations'

export default {
  name: 'Travels',
  head() {
    return {
      title: 'Travels',
      meta: [
        {
          hid: 'littlemouseytravels',
          name: "Little mousey's travels",
          content: "Read journals of Little mousey's travels"
        }
      ]
    }
  },
  components: {
    destinationCard,
    Leafletmap
  },
  data() {
    return {
      markers: locations,
      markersNL: locationsNL,
      markersAsia: locationsAsia,
      markersOld: locationsOld,
      destinations: destinations
    }
  },
  computed: {
    allMarkersCombined() {
      return this.markers
        .concat(this.markersNL)
        .concat(this.markersAsia)
        .concat(this.markersOld)
    }
  }
}
</script>
