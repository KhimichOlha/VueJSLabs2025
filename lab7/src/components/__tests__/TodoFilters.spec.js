import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoFilters from '../TodoFilters.vue'

describe('Component: TodoFilters (v-model check)', () => {
  it('updates v-model value correctly', async () => {
    const initialFilters = { title: '', status: '' }
    const wrapper = mount(TodoFilters, {
      props: {
        filters: initialFilters
      }
    })

    const titleInput = wrapper.find('#filter-title')
    await titleInput.setValue('New Search')

    expect(wrapper.emitted()).toHaveProperty('update:filters')

    const emittedEvent = wrapper.emitted('update:filters')[0]
    expect(emittedEvent[0].title).toBe('New Search')
  })
})
