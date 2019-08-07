import { mount } from '@vue/test-utils'
import weatherButton from '@/components/weatherButton'
import mutations from '@/store/weather/mutations.js'

let wrapper, vm
const mockFunction = jest.fn().mockImplementation(() => Promise.resolve(true))

beforeEach(() => {
  wrapper = mount(weatherButton, {
    methods: {
      checkWeatherData: mockFunction
    }
  })
  vm = wrapper.vm
  vm.checkWeatherData = mockFunction
})

describe('WeatherButton', () => {
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('state about sunset and sunrise should be changed after retrieving weatherdata', () => {
    const sunData = {
      sunrise: '2019-08-06T06:08:00',
      sunset: '2019-08-06T21:22:00'
    }
    const state = {
      sunrise: null,
      sunset: null
    }
    mutations.setSunsetData(state, sunData)

    expect(state).toEqual({
      sunrise: '2019-08-06T06:08:00',
      sunset: '2019-08-06T21:22:00'
    })
  })
})
