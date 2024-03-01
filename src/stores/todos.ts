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
  updateTodo: (id: number, title: string, description: string) => void
}

export const useTodosStore = defineStore<Id, State, Getters, Actions>('todos', {
  state: () => ({
    filter: 'all',
    nextId: 0,
    todos: []
  }),
  getters: {
    finishedTodos(state) {
      return state.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished)
    }
  },
  actions: {
    addTodo(title, description) {
      this.todos = [
        ...this.todos,
        {
          description,
          id: this.nextId++,
          isFinished: false,
          title
        }
      ]
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((item) => item.id !== id)
    },
    updateTodo(id, title, description) {
      const todos = [...this.todos]

      try {
        const itemIndex = todos.findIndex((item) => item.id === id)

        todos[itemIndex].title = title
        todos[itemIndex].description = description

        this.todos = todos
      } catch (exception) {
        console.log(exception)
      }
    }
  },
  persist: true
})
