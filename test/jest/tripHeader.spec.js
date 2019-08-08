import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import tripHeader from '@/components/travelJournal/tripHeader'

Vue.use(Vuetify)

const wrapper = shallowMount(tripHeader, {
  propsData: {
    imgUrl: 'img.png',
    title: 'title',
    text: 'text'
  }
})

describe('Trip header', () => {
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
