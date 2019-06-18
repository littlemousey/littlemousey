<template>
  <v-app class="app">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="/img/littlemousey_wave.png" />
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Welcome!</v-list-tile-title>
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
    <v-toolbar color="blue darken-4" dark fixed app @click="drawer = !drawer">
      <v-toolbar-side-icon />
      <v-toolbar-title class="title" v-text="title" />

      <v-spacer />
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
export default {
  data() {
    return {
      drawer: false,
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
</style>
