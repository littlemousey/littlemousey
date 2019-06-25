<template>
  <section class="travel">
    <v-layout mb-5>
      <v-flex xs6 mx-auto mt-2>
        <div>
          <l-map
            style="height: 300px; width: 800px"
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
        </div>
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
      <v-flex xs3 mx-1 mt-2>
        <v-card hover nuxt to="/travels/schiermonnikoog">
          <v-img src="https://i.postimg.cc/wjHSFSjw/DSC05134.jpg"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Schiermonnikoog</h3>
              <div>
                A Frisian island in the Netherlands. It is one of the 5 Dutch
                Wadden Sea Islands.
              </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange" small nuxt to="/travels/schiermonnikoog"
              >Explore</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3 mx-1 mt-2>
        <v-card hover>
          <v-img src="https://i.postimg.cc/zBB8Yd4n/IMAG2956.jpg"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Paris</h3>
              <div>The world famous capital of France</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Will come soon</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3 mx-1 mt-2>
        <v-card hover>
          <v-img src="https://i.postimg.cc/6q1qyM7X/IMAG2182.jpg"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Kevelaer</h3>
              <div>Pilgrimage town in Germany</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange" small>Will come soon</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3 mx-1 mt-2>
        <v-card hover>
          <v-img src="https://i.postimg.cc/vmj0tspg/IMAG9350.jpg"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Leeuwarden</h3>
              <div>
                Capital city of the Friesland province in the Netherlands
              </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange" small>Will come soon</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import locations from '~/data/locations'
export default {
  data() {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 1,
      center: [50, 20],
      markers: locations
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
