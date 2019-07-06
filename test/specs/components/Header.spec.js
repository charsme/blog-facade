import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import test from 'ava'
import Header from '~/components/Header.vue'

const wrapper = shallowMount(Header, {
  stubs: {
    NuxtLink: RouterLinkStub
  }
})

test('is a Vue instance', t => {
  t.is(wrapper.isVueInstance(), true)
})

test('is a header element', t => {
  t.true(wrapper.is('header') && wrapper.classes('header'))
})

test('contain navigation link', t => {
  t.true(wrapper.contains('nav'))
})
