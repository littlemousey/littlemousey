<template>
  <v-container grid-list-md text-xs-center class="projects-page">
    <v-layout>
      <v-flex>
        <h1>Little mousey's personal projects</h1>
        <p>
          Here is a selection of my personal projects. More projects can be
          found on my
          <a href="https://github.com/littlemousey">Github</a>
          <font-awesome-icon
            class="github-icon"
            :icon="['fab', 'github-square']"
          />
        </p>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center row wrap>
      <project-card
        v-for="project in projects"
        :key="project.name"
        :image="project.image"
        :text="project.text"
        :demo-link="project.demo"
        :repo-url="project.repo"
      ></project-card>
    </v-layout>
  </v-container>
</template>

<script>
import projectCard from '~/components/projectCard'
import projects from '~/static/data/projects/projects'

export default {
  name: 'Projects',
  components: {
    projectCard
  },
  data: function() {
    return {
      projects: projects
    }
  }
}
</script>

<style lang="scss" scoped>
.github-icon {
  color: black;
}
.v-btn {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}
</style>
