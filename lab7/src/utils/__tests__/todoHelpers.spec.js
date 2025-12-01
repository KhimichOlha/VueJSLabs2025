import { describe, it, expect } from 'vitest'
import { filterTasks } from '../todoHelpers'

describe('Unit: Task Filtering', () => {
  const tasks = [
    { id: 1, title: 'Vue', status: 'active', priority: 'high' },
    { id: 2, title: 'React', status: 'done', priority: 'low' }
  ]

  it('filters by status active', () => {
    const result = filterTasks(tasks, { status: 'active' })
    expect(result).toHaveLength(1)
    expect(result[0].title).toBe('Vue')
  })
})