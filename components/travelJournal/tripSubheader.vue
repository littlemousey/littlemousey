<template>
  <v-row>
    <v-col cols="12">
      <h3 class="display-1 my-4 text-underline">
        {{ title }}
      </h3>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'TripSubheader',
  props: { title: { type: String, default: '' } }
}
</script>

<style lang="scss" scoped>
.text-underline {
  text-decoration: underline;
}
</style>
