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
import TripHighlight from '@/components/travelJournal/TripHighlight'
import TripAchievements from '@/components/travelJournal/TripAchievements'
import {
  header,
  highlights,
  achievements,
  dateOfVisit
} from '@/data/journals/schiermonnikoog'
export default {
  name: 'Schiermonnikoog',
  components: { TripHeader, TripHighlight, TripAchievements },
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
