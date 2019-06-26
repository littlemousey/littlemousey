<template>
  <v-app class="app">
    <v-navigation-drawer v-model="drawer" fixed app clipped>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="/img/littlemousey_wave.png" />
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Navigation</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue darken-4" dark fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title class="title" v-text="title" />
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <weather-button></weather-button>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer color="amber darken-3" class="pa-3" app dark>
      <v-spacer></v-spacer>
      <span>&copy; Little Mousey 🐭</span>
    </v-footer>
  </v-app>
</template>

<script>
import weatherButton from '~/components/weatherButton'
export default {
  components: { weatherButton },
  data() {
    return {
      drawer: this.checkOnSmallDevice(),
      items: [
        {
          icon: 'public',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'beach_access',
          title: 'Travels',
          to: '/travels'
        },
        {
          icon: 'toys',
          title: 'Projects',
          to: '/projects'
        },
        {
          icon: 'pets',
          title: 'About',
          to: '/about'
        }
      ],
      title: 'Little mousey'
    }
  },
  methods: {
    checkOnSmallDevice() {
      if (
        this.$vuetify.breakpoint.name === 'sm' ||
        this.$vuetify.breakpoint.name === 'xs'
      ) {
        this.drawer = false
      } else {
        this.drawer = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  user-select: none;
}

.app {
  font-family: 'Lora', serif;
}

.v-toolbar--fixed {
  /* Toolbar z-index has to be higher than Leaflet map */
  z-index: 1100;
}

.v-navigation-drawer--is-mobile {
  /* Navigation drawer z-index has to be higher than Leaflet map */
  z-index: 1100;
}
</style>
