import { Todo } from '@/@types/todo.type'
import {
  CancelEditTodoAction,
  CurrentTodoAction,
  EditCurrentTodoAction,
  StartEditCurrentTodoAction
} from './action.currentTodo'

export const initalCurrrentValue: Todo | null = null

export const reducerCurrentTodo = (currentTodo: Todo | null, action: CurrentTodoAction): Todo | null => {
  switch (action.type) {
    case 'start_edit':
      return action.todo
    case 'edit':
      return currentTodo ? { ...currentTodo, name: action.name } : currentTodo
    case 'cancel_edit':
      return null
    default:
      throw new Error()
  }
}

export const handleStartEditCurrentTodoAction = (todo: Todo) => {
  return { type: 'start_edit', todo } as StartEditCurrentTodoAction
}

export const handleEditCurrentTodoAction = (name: string) => {
  return { type: 'edit', name } as EditCurrentTodoAction
}

export const handleCancelEditCurrentTodoAction = () => {
  return { type: 'cancel_edit' } as CancelEditTodoAction
}
