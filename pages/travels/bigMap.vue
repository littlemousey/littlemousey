<template>
  <v-layout justify-center>
    <v-flex xs12 mt-2>
      <leafletmap :markers="allMarkersCombined" :big-map="true"></leafletmap>
    </v-flex>
  </v-layout>
</template>

<script>
import locations from '~/static/data/locations/locations-eu'
import locationsNL from '~/static/data/locations/locations-nl'
import locationsAsia from '~/static/data/locations/locations-asia'
import Leafletmap from '~/components/leafletmap'
import destinations from '~/static/data/destinations/destinations'

export default {
  name: 'BigMap',
  components: {
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

<style lang="scss" scoped></style>
