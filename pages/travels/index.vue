<template>
  <section class="travel">
    <v-layout mb-5 justify-center>
      <v-flex xs8 md12 mt-2>
        <no-ssr>
          <l-map
            :style="resizeMap"
            :zoom="zoom"
            :center="center"
            :world-copy-jump="true"
            @update:zoom="zoomUpdated"
            @update:center="centerUpdated"
          >
            <l-tile-layer :url="url"></l-tile-layer>
            <v-marker-cluster>
              <l-marker
                v-for="marker in markers"
                :key="marker.city"
                :lat-lng="marker.coordinates"
                ><l-popup>{{ marker.city }}</l-popup></l-marker
              >
              <l-marker
                v-for="marker in markersNL"
                :key="marker.city"
                :lat-lng="marker.coordinates"
                ><l-popup>{{ marker.city }}</l-popup></l-marker
              >
              <l-marker
                v-for="marker in markersAsia"
                :key="marker.city"
                :lat-lng="marker.coordinates"
                ><l-popup>{{ marker.city }}</l-popup></l-marker
              ></v-marker-cluster
            >
          </l-map>
        </no-ssr>
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
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'
import destinations from '~/data/destinations/destinations'

export default {
  name: 'Travels',
  components: {
    destinationCard,
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    'v-marker-cluster': Vue2LeafletMarkerCluster
  },
  data() {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 2,
      center: [50, 20],
      markers: locations,
      markersNL: locationsNL,
      markersAsia: locationsAsia,
      destinations: destinations
    }
  },
  computed: {
    resizeMap: function() {
      if (
        this.$vuetify.breakpoint.name === 'sm' ||
        this.$vuetify.breakpoint.name === 'xs'
      ) {
        return 'height: 300px; width: 200px'
      } else {
        return 'height: 300px; width: 1000px'
      }
    }
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom
    },
    centerUpdated(center) {
      this.center = center
    }
  }
}
</script>
