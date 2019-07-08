<template>
  <section class="travel">
    <v-layout mb-5 justify-center>
      <v-flex xs8 md12 mt-2>
        <leafletmap :markers="allMarkersCombined"></leafletmap>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex text-xs-center>
        <h1>This mouse loves traveling and exploring the world</h1>
        <p>
          You can find some journals of my travels here. I will add more travel
          posts later
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
import locations from '~/data/locations/locations-eu'
import locationsNL from '~/data/locations/locations-nl'
import locationsAsia from '~/data/locations/locations-asia'
import destinationCard from '~/components/destinationCard'
import Leafletmap from '~/components/leafletmap'
import destinations from '~/data/destinations/destinations'

export default {
  name: 'Travels',
  components: {
    destinationCard,
    Leafletmap
  },
  data() {
    return {
      markers: locations,
      markersNL: locationsNL,
      markersAsia: locationsAsia,
      destinations: destinations
    }
  },
  computed: {
    allMarkersCombined() {
      return this.markers.concat(this.markersNL).concat(this.markersAsia)
    }
  }
}
</script>
