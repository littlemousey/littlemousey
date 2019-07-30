<template>
  <v-container class="projects-page text-center">
    <v-row>
      <v-col>
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
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <project-card
        v-for="project in projects"
        :key="project.name"
        :image="project.image"
        :text="project.text"
        :demo-link="project.demo"
        :repo-url="project.repo"
      ></project-card>
    </v-row>
  </v-container>
</template>

<script>
import projectCard from '~/components/projectCard'
import projects from '~/static/data/projects/projects'

export default {
  name: 'Projects',
  head() {
    return {
      title: 'Projects',
      meta: [
        {
          hid: 'littlemouseyprojects',
          name: 'Personal projects',
          content: 'Front-end projects made by Little mousey'
        }
      ]
    }
  },
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
