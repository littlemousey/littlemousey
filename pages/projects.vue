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
      <v-flex xs4>
        <v-card hover href="https://stoic-kilby-75508b.netlify.com/">
          <v-img src="/img/projects/pokedex-vue.png"> </v-img>

          <v-card-actions>
            <v-layout align-center justify-space-around>
              <v-btn
                flat
                color="orange"
                href="https://stoic-kilby-75508b.netlify.com/"
                >Demo</v-btn
              >
              <v-btn
                flat
                color="orange"
                href="https://github.com/littlemousey/pokedex-vue"
                >Code</v-btn
              >
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card hover href="https://littlemousey.github.io/jsonPrettyPrinter/">
          <v-img src="/img/projects/jsonPrettyPrint.png"> </v-img>

          <v-card-actions>
            <v-layout align-center justify-space-around>
              <v-btn
                flat
                color="orange"
                href="https://littlemousey.github.io/jsonPrettyPrinter/"
                >Demo</v-btn
              >
              <v-btn
                flat
                color="orange"
                href="https://github.com/littlemousey/jsonPrettyPrinter"
                >Code</v-btn
              >
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card hover href="https://littlemousey.github.io/pikachuGiphy/">
          <v-img src="/img/projects/pikachuGiphy.png">
            <v-container fill-height fluid pa-2>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text"
                    >Pikachu giphy generator</span
                  >
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-actions>
            <v-layout align-center justify-space-around>
              <v-btn
                flat
                color="orange"
                href="https://littlemousey.github.io/pikachuGiphy/"
                >Demo</v-btn
              >
              <v-btn
                flat
                color="orange"
                href="https://github.com/littlemousey/pikachuGiphy"
                >Code</v-btn
              >
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card hover href="https://zen-tereshkova-f8ce4f.netlify.com/">
          <v-img src="/img/projects/slidingpuzzle.png"> </v-img>

          <v-card-actions>
            <v-layout align-center justify-space-around>
              <v-btn
                flat
                color="orange"
                href="https://zen-tereshkova-f8ce4f.netlify.com/"
                >Demo</v-btn
              >
              <v-btn
                flat
                color="orange"
                href="https://github.com/littlemousey/sliding-puzzle-game"
                >Code</v-btn
              >
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card hover href="https://github.com/littlemousey/pingu-app">
          <v-img src="/img/projects/pingu-app.png"> </v-img>

          <v-card-actions>
            <v-layout align-center justify-space-around>
              <v-btn
                flat
                color="orange"
                href="https://github.com/littlemousey/pingu-app"
                >Demo</v-btn
              >
              <v-btn
                flat
                color="orange"
                href="https://github.com/littlemousey/pingu-app"
                >Code</v-btn
              >
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card hover href="https://littlemousey.github.io/ChristmasVR/">
          <v-img src="/img/projects/christmasVR.png">
            <v-container fill-height fluid pa-2>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text">Christmas VR</span>
                </v-flex>
              </v-layout>
            </v-container></v-img
          >

          <v-card-actions>
            <v-layout align-center justify-space-around>
              <v-btn
                flat
                color="orange"
                href="https://littlemousey.github.io/ChristmasVR/"
                >Demo</v-btn
              >
              <v-btn
                flat
                color="orange"
                href="https://github.com/littlemousey/ChristmasVR"
                >Code</v-btn
              >
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.v-btn {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}
</style>
