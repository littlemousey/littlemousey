<template>
  <v-container grid-list-md text-xs-center class="projects-page">
    <v-layout>
      <v-flex>
        <h1>Little mousey's personal projects</h1>
        <p>
          Here is a selection of my personal projects. More projects can be
          found on my Github
          <a href="https://github.com/littlemousey"
            ><font-awesome-icon :icon="['fab', 'github']"
          /></a>
        </p>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center row wrap>
      <project-card
        image="/img/projects/pokedex-vue.png"
        text="Pokédex built with Vue CLI"
        demo-link="https://stoic-kilby-75508b.netlify.com/"
        repo-url="https://github.com/littlemousey/pokedex-vue"
      ></project-card>
      <project-card
        image="/img/projects/jsonPrettyPrint.png"
        text="Pretty print one-line JSON to readable JSON"
        demo-link="https://littlemousey.github.io/jsonPrettyPrinter/"
        repo-url="https://github.com/littlemousey/jsonPrettyPrinter"
      ></project-card>
      <project-card
        image="/img/projects/pikachuGiphy.png"
        text="Pikachu giphy generator"
        demo-link="https://littlemousey.github.io/pikachuGiphy/"
        repo-url="https://github.com/littlemousey/pikachuGiphy"
      ></project-card>
      <project-card
        image="/img/projects/slidingpuzzle.png"
        text="Sliding puzzle game built with Vue CLI"
        demo-link="https://zen-tereshkova-f8ce4f.netlify.com/"
        repo-url="https://github.com/littlemousey/sliding-puzzle-game"
      ></project-card>
      <project-card
        image="/img/projects/pingu-app.png"
        text="Pingu app built with cordova"
        demo-link="https://github.com/littlemousey/pingu-app"
        repo-url="https://github.com/littlemousey/pingu-app"
      ></project-card>
      <project-card
        image="/img/projects/christmasVR.png"
        text="Christmas VR meeting room built with A-FRAME"
        demo-link="https://littlemousey.github.io/ChristmasVR/"
        repo-url="https://github.com/littlemousey/ChristmasVR"
      ></project-card>
    </v-layout>
  </v-container>
</template>

<script>
import projectCard from '~/components/projectCard'

export default {
  name: 'Projects',
  components: {
    projectCard
  }
}
</script>

<style lang="scss" scoped>
.v-btn {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}
</style>
