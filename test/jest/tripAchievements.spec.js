import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import tripAchievements from '@/components/travelJournal/tripAchievements'

Vue.use(Vuetify)

const wrapper = shallowMount(tripAchievements, {
  propsData: {
    title: 'title',
    achievements: [{ title: 'title', achieved: true }]
  }
})

describe('Achievements', () => {
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
