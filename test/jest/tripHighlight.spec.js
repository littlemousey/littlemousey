import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import tripHighlight from '@/components/travelJournal/tripHighlight'

Vue.use(Vuetify)

let wrapper
beforeEach(() => {
  wrapper = shallowMount(tripHighlight, {
    propsData: {
      imageLeft: true
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Trip highlight', () => {
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
