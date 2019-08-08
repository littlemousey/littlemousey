import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import projectCard from '@/components/projectCard'

Vue.use(Vuetify)

let wrapper

beforeEach(() => {
  wrapper = shallowMount(projectCard, {
    propsData: {
      demoLink: 'demo link',
      image: 'image',
      repoUrl: 'repoUrl'
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Project card', () => {
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
