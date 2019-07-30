<template>
  <section>
    <v-row align-content="space-around">
      <v-col cols="12" sm="6" md="4">
        <v-card v-if="weatherData" class="mx-3">
          <v-img src="https://source.unsplash.com/500x250/?weather"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline">
                The weather in the Netherlands today 🇳🇱
              </h3>
              <div class="mt-2">
                <p class="body-1">
                  🌡️ Temperature: {{ weatherData.temperature }}°C
                </p>
                <p class="body-1">☀️ Sun power: {{ weatherData.sunpower }}</p>
                <p class="body-1">🌬️ Wind speed: {{ weatherData.windspeed }}</p>
                <p class="body-1">
                  🧭 Wind direction: {{ weatherData.winddirection }}
                </p>
                <p class="body-1">
                  💧 Precipitation: {{ weatherData.precipitation }}
                </p>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card v-if="sunrise" class="mx-3">
          <v-img src="https://source.unsplash.com/500x250/?sunrise"></v-img>
          <v-card-title primary-title>
            <div>
              <div class="mt-2">
                <div class="display-1">
                  🕰️ {{ weatherData.timestamp | dateToHour }}
                </div>
                <div class="display-1">
                  🌅 Sunrise: {{ sunrise | dateToTime }}
                </div>
                <div class="display-1">
                  🌇 Sunset: {{ sunset | dateToTime }}
                </div>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="8" md="8">
        <div class="text-right mt-3">
          Weather data is provided by
          <a href="https://www.buienradar.nl">buienradar.nl</a> Images are from
          <a href="https://unsplash.com/">Unsplash</a>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Weather',
  head() {
    return {
      title: 'Weather',
      meta: [
        {
          hid: 'littlemouseyweather',
          name: 'Weather',
          content: 'Weather in the Netherlands'
        }
      ]
    }
  },
  filters: {
    dateToTime(value) {
      return value.substring(11, 16)
    },
    dateToHour(value) {
      const hour = value.substring(11, 13)
      if (parseInt(hour) < 13) {
        return hour + 'AM'
      } else {
        const hourInPM = parseInt(hour) - 12
        return hourInPM + 'PM'
      }
    }
  },
  computed: {
    ...mapState('weather', ['weatherData']),
    ...mapState('weather', ['sunrise', 'sunset'])
  }
}
</script>
