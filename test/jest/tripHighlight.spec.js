import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import tripHighlight from '@/components/travelJournal/tripHighlight'

Vue.use(Vuetify)

const wrapper = shallowMount(tripHighlight, {
  propsData: {
    imageLeft: true
  }
})

describe('Trip highlight', () => {
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
