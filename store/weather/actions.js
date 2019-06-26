export default {
  setWeatherData(context, payload) {
    context.commit('setWeatherData', payload)
  },
  setSunsetData(context, payload) {
    context.commit('setSunsetData', payload)
  }
}
