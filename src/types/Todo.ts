export type TodoItem = {
  description: string
  id: number
  isFinished: boolean
  title: string
}

export type TodoList = TodoItem[]
export type Filter = 'all' | 'finished' | 'unfinished'
