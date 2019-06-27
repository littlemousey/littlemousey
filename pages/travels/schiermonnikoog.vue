<template>
  <div class="schiermonnikoog-page">
    <trip-header
      img-url="https://i.postimg.cc/13JBXgwP/DSC05152.jpg"
      title="Schiermonnikoog"
      text="This island is a paradise for hikers and bikers to enjoy nature. It
          has long stretching beaches (18 kilometers long) but also offers small
          lakes and woods. There are no cars allowed on the island. You can take
          a ferry to Schiermonnikoog from Lauwersoog in the Friesland province."
    ></trip-header>
    <trip-highlight
      image-url="https://i.postimg.cc/D0L5wBdY/DSC05097.jpg"
      text="The ferry to the island. It takes about 45 minutes. You can buy
          tickets online. It would be wise to check the timetable departure
          times."
    ></trip-highlight>
    <v-layout row wrap my-5>
      <v-flex xs5 mx-2 align-self-center>
        <div>
          There are many companies for renting bikes to get around the island
          quickly.
        </div>
      </v-flex>
      <v-flex xs5 mx-2>
        <v-card>
          <v-img src="https://i.postimg.cc/TYjC8NPK/DSC05121.jpg"></v-img>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap my-5>
      <v-flex xs5 mx-2>
        <v-card>
          <v-img src="https://i.postimg.cc/LsQxCq8v/IMAG3564.jpg"></v-img>
        </v-card>
      </v-flex>
      <v-flex xs5 mx-2 align-self-center>
        <div>
          The town center contains one supermarket and one bakery, but also
          offers a few shops and there is plenty of choice for restaurants.
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap my-5>
      <v-flex xs5 mx-2>
        <v-card>
          <v-img src="https://i.postimg.cc/mDGF02bn/IMAG3614.jpg"></v-img>
        </v-card>
      </v-flex>
      <v-flex xs5 mx-2 align-self-center>
        <div>
          One well-known hotel and restaurant is called 'Hotel Van Der Werff'.
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap my-5>
      <v-flex xs5 mx-2>
        <v-card>
          <v-img src="https://i.postimg.cc/qq4yCBSK/IMAG3538.jpg"></v-img>
        </v-card>
      </v-flex>
      <v-flex xs5 mx-2 align-self-center>
        <div>
          I can definitely recommend the 'Eilander appeltaart' (Island apple
          pie) at restaurant Ambrosijn 😉🍰
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap my-5>
      <v-flex xs5 mx-2 align-self-center> </v-flex>
      <v-flex xs5 mx-2>
        <v-card>
          <v-img src="https://i.postimg.cc/zBL09JLN/IMAG3562.jpg"></v-img>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap my-5>
      <v-flex xs5 mx-2>
        <v-card>
          <v-img src="https://i.postimg.cc/bwGFm39G/DSC05112.jpg"></v-img>
        </v-card>
      </v-flex>
      <v-flex xs5 mx-2 align-self-center> </v-flex>
    </v-layout>
    <v-layout row wrap my-5>
      <v-flex xs5 mx-2 align-self-center>
        <div>
          Because the island is a breeding ground for birds, you can do bird
          spotting from a wooden hut at the west lake to not disturb the birds.
        </div></v-flex
      >
      <v-flex xs5 mx-2>
        <v-card>
          <v-img src="https://i.postimg.cc/13JBXgwP/DSC05152.jpg"></v-img>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap my-5>
      <v-flex xs5 mx-2>
        <v-card>
          <v-img src="https://i.postimg.cc/zGJpqwL0/IMAG3570.jpg"></v-img>
        </v-card>
      </v-flex>
      <v-flex xs5 mx-2 align-self-center>
        <div>
          The island famous monk, Martin van Waning. He was a sculptor and
          artist.
        </div></v-flex
      >
    </v-layout>
    <v-layout row wrap my-5>
      <v-flex xs5 mx-2 align-self-center>
        <div>
          The beaches are very wide and you might be able to spot seals. Be
          cautious, you are not allowed to touch or come near young seals.
        </div></v-flex
      >
      <v-flex xs5 mx-2>
        <v-card>
          <v-img src="https://i.postimg.cc/zvbdXkXb/DSC05179.jpg"></v-img>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap align-start justify-center>
      <v-flex xs12 sm10 md4 my-5>
        <v-card>
          <v-toolbar color="amber darken-3" dark>
            <v-toolbar-title>Achievements 🐭</v-toolbar-title>
          </v-toolbar>
          <v-list>
            <v-list-tile v-for="item in items" :key="item.title" avatar>
              <v-list-tile-action>
                <v-icon v-if="item.achieved" color="red">star</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap align-start justify-center>
      <v-flex xs6 my-5>
        <div class="text-xs-center">
          <span class="grey--text">Period of visit: June 2019</span>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import TripHeader from '@/components/travelJournal/TripHeader'
import TripHighlight from '@/components/travelJournal/TripHighlight'
export default {
  name: 'Schiermonnikoog',
  components: { TripHeader, TripHighlight },
  data() {
    return {
      items: [
        {
          achieved: true,
          title: 'Visit lighthouse'
        },
        {
          achieved: true,
          title: 'Eat Eilander apple pie'
        },
        {
          achieved: true,
          title: 'Cycle to beacon of Kobbeduinen (sand dune)'
        },
        {
          achieved: true,
          title: 'Visit beach pavilion De Marlijn'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.v-list__tile__title {
  font-size: 12px;
}
</style>
