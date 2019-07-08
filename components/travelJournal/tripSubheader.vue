<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div class="display-1">
        {{ title }}
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'TripSubheader',
  props: { title: { type: String, default: '' } }
}
</script>
