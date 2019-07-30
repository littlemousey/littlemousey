<template>
  <v-row justify="center">
    <v-col class="mt-2" cols="12">
      <leafletmap :markers="allMarkersCombined" :big-map="true"></leafletmap>
    </v-col>
  </v-row>
</template>

<script>
import locations from '~/static/data/locations/locations-eu'
import locationsNL from '~/static/data/locations/locations-nl'
import locationsAsia from '~/static/data/locations/locations-asia'
import locationsOld from '~/static/data/locations/locations-until-2010'
import Leafletmap from '~/components/leafletmap'
import destinations from '~/static/data/destinations/destinations'

export default {
  name: 'BigMap',
  head() {
    return {
      title: 'World map',
      meta: [
        {
          hid: 'littlemouseymap',
          name: "Little mousey's travels on world map",
          content:
            'World map which shows all the places Little mousey has visited'
        }
      ]
    }
  },
  components: {
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

<style lang="scss" scoped></style>
