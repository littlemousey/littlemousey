<template>
  <div class="page">
    <trip-header
      :img-url="journal.header.image"
      :title="journal.header.title"
      :text="journal.header.text"
    ></trip-header>
    <div v-for="highlight in journal.highlights" :key="highlight.id">
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
    <trip-achievements
      :achievements="journal.achievements"
      title="Achievements 🐭"
      icon="star"
    ></trip-achievements>
    <v-row align="start" justify="center">
      <v-col class="my-5" cols="6">
        <div class="text-center">
          <div>Period of visit: {{ journal.dateVisited }}</div>
          <div class="grey--text">
            Images are copyrighted, please ask before using the images.
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TripHeader from '@/components/travelJournal/TripHeader'
import TripSubheader from '@/components/travelJournal/TripSubheader'
import TripHighlight from '@/components/travelJournal/TripHighlight'
import TripAchievements from '@/components/travelJournal/TripAchievements'

export default {
  head() {
    return {
      title: this.convertStringToTitle(this.$route.params.id),
      meta: [
        {
          hid: `littlemousey${this.$route.params.id}`,
          name: `${this.$route.params.id}`,
          content: `Little mousey's journal on ${this.$route.params.id}`
        }
      ]
    }
  },
  components: { TripHeader, TripSubheader, TripHighlight, TripAchievements },
  async asyncData({ app, params }) {
    const journal = await app.$axios.$get(`/data/journals/${params.id}.json`)
    return { journal }
  },
  methods: {
    convertStringToTitle(string) {
      const firstLetter = string.charAt(0).toUpperCase()
      const stringWithoutFirstLetter = string.slice(1)
      return firstLetter + stringWithoutFirstLetter
    }
  }
}
</script>
