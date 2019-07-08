<template>
  <div class="paris-page">
    <trip-header
      :img-url="header.image"
      :title="header.title"
      :text="header.text"
    ></trip-header>
    <div v-for="highlight in highlights" :key="highlight.id">
      <template v-if="highlight.image">
        <trip-highlight
          :image-url="highlight.image"
          :text="highlight.text"
          :image-left="highlight.imageLeft"
          :image-description="highlight.imageDescription"
        ></trip-highlight>
      </template>
      <template v-else>
        <trip-subheader :title="highlight.title"></trip-subheader>
      </template>
    </div>
    <trip-achievements :achievements="achievements"></trip-achievements>
    <v-layout row wrap align-start justify-center>
      <v-flex xs6 my-5>
        <div class="text-xs-center">
          <div>Period of visit: {{ dateOfVisit }}</div>
          <div class="grey--text">
            Images are copyrighted, please ask before using the images.
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import TripHeader from '@/components/travelJournal/TripHeader'
import TripSubheader from '@/components/travelJournal/TripSubheader'
import TripHighlight from '@/components/travelJournal/TripHighlight'
import TripAchievements from '@/components/travelJournal/TripAchievements'
import {
  header,
  highlights,
  achievements,
  dateOfVisit
} from '@/data/journals/paris'
export default {
  name: 'Paris',
  components: { TripHeader, TripSubheader, TripHighlight, TripAchievements },
  data() {
    return {
      header: header,
      highlights: highlights,
      achievements: achievements,
      dateOfVisit: dateOfVisit
    }
  }
}
</script>
