import { mount } from '@vue/test-utils'
import SkipLink from '@/components/SkipLink.vue'

describe('SkipLink', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(SkipLink)
        expect(wrapper.vm).toBeTruthy()
    })
})
