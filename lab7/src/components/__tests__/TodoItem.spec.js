import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoItem from '../TodoItem.vue'

describe('Component: TodoItem', () => {
  const taskMock = {
    id: 1,
    title: 'Test Task',
    description: 'Desc',
    status: 'active',
    priority: 'high',
    createdAt: new Date().toISOString()
  }

  it('renders props correctly', () => {
    const wrapper = mount(TodoItem, { props: { task: taskMock } })
    expect(wrapper.text()).toContain('Test Task')
    expect(wrapper.find('.priority-badge.high').exists()).toBe(true)
  })

  it('emits delete event', async () => {
    const wrapper = mount(TodoItem, { props: { task: taskMock } })
    await wrapper.find('.btn-delete').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('delete-task')
  })
})
