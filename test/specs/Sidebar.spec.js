import { mount } from '@vue/test-utils'
import test from 'ava'
import Sidebar from '../../components/Sidebar.vue'

test('is a Vue instance', t => {
  const wrapper = mount(Sidebar)
  t.is(wrapper.isVueInstance(), true)
})
