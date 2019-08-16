<template>
  <v-container class="projects-page text-center">
    <v-row align="center">
      <v-col cols="11">
        <h1>Articles written by Little Mousey</h1>
        <p>
          Here you can find the articles I posted on
          <a href="https://medium.com/@littlemousey">Medium</a>
          <font-awesome-icon class="icon" :icon="['fab', 'medium']" />
        </p>
      </v-col>
    </v-row>
    <v-row
      v-for="article in articles"
      :key="article.title"
      align="center"
      justify="center"
    >
      <v-card class="mx-auto mt-5 pb-5" outlined hover :href="article.url">
        <v-img :src="article.img"> </v-img>
        <div class="display-1 text--primary">
          {{ article.title }}
        </div>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Articles',
  data: function() {
    return {
      articles: [
        {
          title: 'Big world of Frontend development',
          description: '',
          img: '/img/articles/bigworldoffrontend.png',
          url:
            'https://medium.com/@littlemousey/the-big-world-of-front-end-459af0cba609'
        },
        {
          title: 'Build a Pokédex with Vue CLI',
          description: '',
          img: '/img/articles/pokedex-vue-cli.png',
          url:
            'https://medium.com/frontmen/build-a-pok%C3%A9dex-with-vue-cli-fc66920015b3'
        },
        {
          title: 'Amsterdam JS Nation 2019',
          description: '',
          img: '/img/articles/amsterdamJS.jpg',
          url:
            'https://medium.com/frontmen/amsterdamjs-nation-2019-a84bbc2b8f9a'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  color: black;
}
</style>
