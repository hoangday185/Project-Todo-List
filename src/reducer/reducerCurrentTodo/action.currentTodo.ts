import { Todo } from '@/@types/todo.type'

export type CurrentTodoAction = StartEditCurrentTodoAction | EditCurrentTodoAction | CancelEditTodoAction

export type StartEditCurrentTodoAction = { type: 'start_edit'; todo: Todo }
export type EditCurrentTodoAction = { type: 'edit'; name: string }
export type CancelEditTodoAction = { type: 'cancel_edit' }
