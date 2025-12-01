export function filterTasks(tasks, filters) {
  return tasks.filter(task => {
    if (filters.title && !task.title.toLowerCase().includes(filters.title.toLowerCase())) return false;
    if (filters.status && task.status !== filters.status) return false;
    if (filters.priority && task.priority !== filters.priority) return false;
    return true;
  })
}
