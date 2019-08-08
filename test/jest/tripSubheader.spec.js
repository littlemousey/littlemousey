import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import tripSubheader from '@/components/travelJournal/tripSubheader'

Vue.use(Vuetify)

const wrapper = shallowMount(tripSubheader)

describe('Trip subheader', () => {
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
