import type { Filter, Todos } from '@/types/todo'
import { defineStore } from 'pinia'

type Id = 'todos'

type State = {
  filter: Filter
  nextId: number
  todos: Todos
}

type Getters = {}

type Actions = {
  addTodo: (title: string, description: string) => void
  deleteTodo: (id: number) => void
  updateTodo: (id: number, title: string, description: string) => void
}

export const useTodosStore = defineStore<Id, State, Getters, Actions>('todos', {
  state: () => ({
    filter: 'all',
    nextId: 0,
    todos: []
  }),
  actions: {
    addTodo(title, description) {
      this.todos = [
        ...this.todos,
        {
          description,
          id: this.nextId++,
          title
        }
      ]
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    updateTodo(id, title, description) {
      const todos = [...this.todos]
      const index = todos.findIndex((todo) => todo.id === id)

      if (index !== -1) {
        todos[index].title = title
        todos[index].description = description

        this.todos = todos
      }
    }
  },
  persist: true
})
