import type { Filter, TodoList } from '@/types/todo'
import { defineStore } from 'pinia'

type Id = 'todos'

type State = {
  filter: Filter
  nextId: number
  todos: TodoList
}

type Getters = {
  finishedTodos: (state: State) => TodoList
  unfinishedTodos: (state: State) => TodoList
}

type Actions = {
  addTodo: (title: string, description: string) => void
  deleteTodo: (id: number) => void
}

export const useTodosStore = defineStore<Id, State, Getters, Actions>('todos', {
  state: () => ({
    filter: 'all',
    nextId: 0,
    todos: []
  }),
  getters: {
    finishedTodos(state: State) {
      return state.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state: State) {
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
    },
    deleteTodo(id: number) {
      this.todos = this.todos.filter((item) => item.id !== id)
    }
  },
  persist: true
})
