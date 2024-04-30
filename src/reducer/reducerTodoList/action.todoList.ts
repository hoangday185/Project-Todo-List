import { Todo } from '@/@types/todo.type'

export type TodoListAction =
  | AddTodoAction
  | UpdateDoneToDoAction
  | UpdateEditTodoAction
  | DeleteTodoAction
  | GetDataTodoAction

export type AddTodoAction = { type: 'add_todo'; todo: Todo }
export type UpdateDoneToDoAction = { type: 'update_done_todo'; id: string; done: boolean }
export type UpdateEditTodoAction = { type: 'update_edit_todo'; todo: Todo }
export type DeleteTodoAction = { type: 'delete_todo'; id: string }
export type GetDataTodoAction = { type: 'get_data'; todos: Todo[] }
