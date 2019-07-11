<template>
  <no-ssr>
    <l-map
      :style="resizeMap"
      :zoom="zoom"
      :center="center"
      :world-copy-jump="true"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <v-marker-cluster>
        <l-marker
          v-for="marker in markers"
          :key="marker.city"
          :lat-lng="marker.coordinates"
          ><l-popup>{{ marker.city }}</l-popup></l-marker
        ></v-marker-cluster
      >
    </l-map>
  </no-ssr>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'

export default {
  name: 'Leafletmap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    'v-marker-cluster': Vue2LeafletMarkerCluster
  },
  props: {
    markers: {
      type: Array,
      required: true
    },
    zoom: {
      type: Number,
      default: 2
    },
    center: {
      type: Array,
      default() {
        return [50, 20]
      }
    },
    bigMap: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    }
  },
  computed: {
    resizeMap: function() {
      if (this.bigMap) {
        if (
          this.$vuetify.breakpoint.name === 'sm' ||
          this.$vuetify.breakpoint.name === 'xs'
        ) {
          return 'height: 80vh; width: 90vw'
        } else {
          return 'height: 70vh; width: 70vw'
        }
      }
      if (
        this.$vuetify.breakpoint.name === 'sm' ||
        this.$vuetify.breakpoint.name === 'xs'
      ) {
        return 'height: 300px; width: 200px'
      } else {
        return 'height: 300px; width: 1000px'
      }
    }
  }
}
</script>
