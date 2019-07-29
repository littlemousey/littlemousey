<template>
  <v-app class="app">
    <v-navigation-drawer v-model="drawer" width="300" fixed app clipped>
      <v-list dense nav class="py-0">
        <v-list-item>
          <v-list-item-avatar size="70">
            <img src="/img/littlemousey_wave.png" />
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          router
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="subtitle-1">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="blue darken-4" dark fixed app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title
        class="title home-link"
        @click="goToHome()"
        v-text="title"
      />
      <v-spacer />
      <weather-button></weather-button>
    </v-app-bar>
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
    },
    goToHome() {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  user-select: none;
}

.home-link {
  cursor: pointer;
}

.app {
  font-family: 'Lora', serif;
}

.v-app-bar {
  /* Toolbar z-index has to be higher than Leaflet map */
  &.v-toolbar {
    z-index: 1100;
  }
}

.v-navigation-drawer--is-mobile {
  /* Navigation drawer z-index has to be higher than Leaflet map */
  z-index: 1100;
}
</style>
