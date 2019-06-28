<template>
  <div class="schiermonnikoog-page">
    <trip-header
      :img-url="header.image"
      :title="header.title"
      :text="header.text"
    ></trip-header>
    <trip-highlight
      v-for="highlight in highlights"
      :key="highlight.image"
      :image-url="highlight.image"
      :text="highlight.text"
      :image-left="highlight.imageLeft"
      :image-description="highlight.imageDescription"
    ></trip-highlight>
    <trip-achievements :achievements="achievements"></trip-achievements>
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
import TripAchievements from '@/components/travelJournal/TripAchievements'
import {
  header,
  highlights,
  achievements
} from '@/data/journals/schiermonnikoog'
export default {
  name: 'Schiermonnikoog',
  components: { TripHeader, TripHighlight, TripAchievements },
  data() {
    return {
      header: header,
      highlights: highlights,
      achievements: achievements
    }
  }
}
</script>
