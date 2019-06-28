<template>
  <v-layout row wrap align-start justify-center>
    <v-flex xs12 sm10 md4 my-5>
      <v-card>
        <v-toolbar color="blue darken-4" dark>
          <v-toolbar-title>Achievements 🐭</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-list-tile
            v-for="achievement in achievements"
            :key="achievement.title"
            avatar
          >
            <v-list-tile-action>
              <v-icon v-if="achievement.achieved" color="red">star</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-text="achievement.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'TripAchievements',
  props: {
    achievements: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.v-list__tile__title {
  font-size: 12px;
}
</style>
