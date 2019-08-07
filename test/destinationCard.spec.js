import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import destinationCard from '@/components/destinationCard'

Vue.use(Vuetify)

const wrapper = shallowMount(destinationCard, {
  propsData: {
    title: 'title',
    text: 'text',
    imageUrl: 'imageUrl'
  }
})

describe('Destination card', () => {
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
