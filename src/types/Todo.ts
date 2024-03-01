export type Todo = {
  description: string
  id: number
  title: string
}

export type Todos = Todo[]
export type Filter = 'all' | 'finished' | 'unfinished'
