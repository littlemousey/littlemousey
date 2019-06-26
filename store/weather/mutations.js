export default {
  setWeatherData(state, payload) {
    state.weatherData = payload
  },
  setSunsetData(state, { sunrise, sunset }) {
    state.sunrise = sunrise
    state.sunset = sunset
  }
}
