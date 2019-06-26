<template>
  <section class="travel">
    <v-layout mb-5>
      <v-flex xs6 mx-auto mt-2>
        <l-map
          :style="resizeMap"
          :zoom="zoom"
          :center="center"
          :world-copy-jump="true"
          @update:zoom="zoomUpdated"
          @update:center="centerUpdated"
        >
          <l-tile-layer :url="url"></l-tile-layer>
          <l-marker
            v-for="marker in markers"
            :key="marker.city"
            :lat-lng="marker.coordinates"
            ><l-popup>{{ marker.city }}</l-popup></l-marker
          >
        </l-map>
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
        title="Schiermonnikoog"
        text="A Frisian island in the Netherlands. It is one of the 5 Dutch
                Wadden Sea Islands"
        image-url="https://i.postimg.cc/wjHSFSjw/DSC05134.jpg"
        link="/travels/schiermonnikoog"
        button-text="Explore"
      ></destination-card>
      <destination-card
        title="Paris"
        text="The world famous capital of France"
        image-url="https://i.postimg.cc/zBB8Yd4n/IMAG2956.jpg"
        link="/travels/test"
        button-text="Will come soon"
      ></destination-card>
      <destination-card
        title="Kevelaer"
        text="Pilgrimage town in Germany"
        image-url="https://i.postimg.cc/6q1qyM7X/IMAG2182.jpg"
        link="/travels/test"
        button-text="Will come soon"
      ></destination-card>
      <destination-card
        title="Leeuwarden"
        text="Capital city of the Friesland province in the Netherlands"
        image-url="https://i.postimg.cc/vmj0tspg/IMAG9350.jpg"
        link="/travels/test"
        button-text="Will come soon"
      ></destination-card>
      <destination-card
        title="Groningen"
        text="Lively student city in the northern part of the Netherlands"
        image-url="https://i.postimg.cc/VsS0q688/IMAG9315.jpg"
        link="/travels/test"
        button-text="Will come soon"
      ></destination-card>
    </v-layout>
  </section>
</template>

<script>
import locations from '~/data/locations'
import destinationCard from '~/components/destinationCard'

export default {
  name: 'Travels',
  components: { destinationCard },
  data() {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 1,
      center: [50, 20],
      markers: locations
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
        return 'height: 300px; width: 800px'
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
