import type { Filter, TodoList } from '@/types/Todo'
import { defineStore } from 'pinia'

type Id = 'todos'

type TodosState = {
  filter: Filter
  nextId: number
  todos: TodoList
}

type Getters = {
  finishedTodos: (state: TodosState) => TodoList
  unfinishedTodos: (state: TodosState) => TodoList
}

type Actions = {
  addTodo: (title: string, description: string) => void
}

export const useTodos = defineStore<Id, TodosState, Getters, Actions>('todos', {
  state: () => ({
    filter: 'all',
    nextId: 0,
    todos: []
  }),
  getters: {
    finishedTodos(state: TodosState) {
      return state.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state: TodosState) {
      return state.todos.filter((todo) => !todo.isFinished)
    }
  },
  actions: {
    addTodo(title: string, description: string) {
      this.todos.push({
        description,
        id: this.nextId++,
        isFinished: false,
        title
      })
    }
  }
})
