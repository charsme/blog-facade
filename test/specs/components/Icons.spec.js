import { mount } from '@vue/test-utils'
import test from 'ava'
import Icon from '~/components/Icon.vue'

const wrapper = mount(Icon)

test('is a Vue instance', t => {
  t.true(wrapper.isVueInstance())
})

test('is a SVG element', t => {
  t.true(wrapper.is('svg'))
})
