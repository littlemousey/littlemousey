<template>
  <v-btn v-if="weatherData" flat class="font-weight-bold" nuxt to="weather"
    ><span class="weather-icon">{{ weatherIcon }}</span
    >{{ weatherData.temperature }}°C
  </v-btn>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'WeatherButton',
  data() {
    return {
      weatherData: null
    }
  },
  computed: {
    weatherIcon() {
      if (this.weatherData.weatherdescription.includes('bewolkt')) {
        return '☁️'
      }
      if (this.weatherData.weatherdescription.includes('zonnig')) {
        return '☀️'
      }
      if (this.weatherData.weatherdescription.includes('regen')) {
        return '🌧️'
      }
      return '🌤️'
    }
  },
  mounted() {
    this.checkWeatherData()
    const self = this
    setInterval(function() {
      self.checkWeatherData()
    }, 600000)
  },
  methods: {
    async checkWeatherData() {
      const data = await this.$axios.$get(
        'https://data.buienradar.nl/2.0/feed/json'
      )
      const nationalWeather = data.actual.stationmeasurements.find(station => {
        return station.stationname === 'Meetstation De Bilt'
      })
      this.weatherData = nationalWeather
      this.setWeatherData(this.weatherData)
      const sunData = {
        sunrise: data.actual.sunrise,
        sunset: data.actual.sunset
      }

      this.setSunsetData(sunData)
    },
    ...mapActions('weather', ['setWeatherData']),
    ...mapActions('weather', ['setSunsetData'])
  }
}
</script>

<style lang="scss" scoped>
.weather-icon {
  font-size: 25px;
  margin-right: 5px;
}
</style>
