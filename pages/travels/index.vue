<template>
  <section class="travel">
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
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs3 mx-1 mt-2>
        <v-card hover>
          <v-img src="https://i.postimg.cc/wjX6XRhs/DSC05134.jpg"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Schiermonnikoog</h3>
              <div>A Frisian island in The Netherlands</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange" small nuxt to="/travels/test"
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
            <v-btn flat color="orange" small nuxt to="/travels/test"
              >Explore</v-btn
            >
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
            <v-btn flat color="orange" small nuxt to="/travels/test"
              >Explore</v-btn
            >
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
                Capital city of the Friesland province in The Netherlands
              </div>
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      maxHeight: '400px',
      maxWeight: '400px'
    }
  }
}
</script>
