import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import leafletMap from '@/components/leafletMap'

Vue.use(Vuetify)

let wrapper

beforeEach(() => {
  wrapper = shallowMount(leafletMap, {
    propsData: {
      markers: [{ city: 'Jakarta', coordinates: [-6.17511, 106.865036] }]
    },
    computed: {
      resizeMap() {
        return 'height: 300px; width: 1000px'
      }
    },
    stubs: {
      LMap: true,
      LTileLayer: true,
      LMarker: true,
      LPopup: true,
      'v-marker-cluster': true,
      'no-ssr': true
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Leaflet map', () => {
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
