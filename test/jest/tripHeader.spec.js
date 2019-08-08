import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import tripHeader from '@/components/travelJournal/tripHeader'

Vue.use(Vuetify)

let wrapper
beforeEach(() => {
  wrapper = shallowMount(tripHeader, {
    propsData: {
      imgUrl: 'img.png',
      title: 'title',
      text: 'text'
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Trip header', () => {
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
