import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import projectCard from '@/components/projectCard'

Vue.use(Vuetify)

const wrapper = shallowMount(projectCard, {
  propsData: {
    demoLink: 'demo link',
    image: 'image',
    repoUrl: 'repoUrl'
  }
})

describe('Project card', () => {
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
