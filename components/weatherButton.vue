<template>
  <v-btn v-if="weatherData" text class="font-weight-bold" nuxt to="weather"
    ><span class="weather-icon">{{ weatherIcon }}</span
    >{{ weatherData.temperature }}°C<span class="weather-icon">{{
      dayNightIndicator
    }}</span>
  </v-btn>
</template>

<script>
import { mapActions, mapState } from 'vuex'
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
    },
    ...mapState('weather', ['sunrise', 'sunset']),
    dayNightIndicator() {
      const dutchTime = parseInt(this.weatherData.timestamp.substring(11, 13))
      const sunrise = parseInt(this.sunrise.substring(11, 13))
      const sunset = parseInt(this.sunset.substring(11, 13))
      if (dutchTime < sunrise || dutchTime > sunset) {
        return '🌙'
      }
      return '☀️'
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
  margin: 0 5px;
}
</style>
