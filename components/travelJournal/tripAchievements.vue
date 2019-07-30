<template>
  <v-layout row wrap align-start justify-center>
    <v-flex xs12 sm10 md4 my-5>
      <v-card>
        <v-toolbar :color="color" dark>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-list-item
            v-for="achievement in achievements"
            :key="achievement.title"
          >
            <v-list-item-action>
              <v-icon v-if="achievement.achieved" :color="iconColor">{{
                icon
              }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title v-text="achievement.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'TripAchievements',
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'blue darken-4'
    },
    icon: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: 'red'
    },
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
