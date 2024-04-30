import { Todo } from '@/@types/todo.type'
import {
  AddTodoAction,
  DeleteTodoAction,
  GetDataTodoAction,
  TodoListAction,
  UpdateDoneToDoAction,
  UpdateEditTodoAction
} from './action.todoList'

export const initTodoList: Todo[] = []

export const reducerTodoList = (todoList: Todo[], action: TodoListAction) => {
  switch (action.type) {
    case 'add_todo':
      return [...todoList, action.todo]
    case 'update_done_todo':
      return todoList.map((todo) => {
        if (todo.id == action.id) {
          return { ...todo, done: action.done }
        }
        return todo
      })
    case 'update_edit_todo':
      return todoList.map((todo) => {
        if (todo.id == action.todo.id) {
          return action.todo
        }
        return todo
      })
    case 'delete_todo':
      return todoList.filter((todo) => todo.id != action.id)
    case 'get_data':
      return action.todos
    default:
      throw new Error('Invalid action ' + action)
  }
}

export const hanldeAddTodoAction = (todo: Todo) => {
  return { type: 'add_todo', todo } as AddTodoAction
}

export const handleDoneTodoAction = (id: string, done: boolean) => {
  return { type: 'update_done_todo', id, done } as UpdateDoneToDoAction
}

export const handleUpdateEditTodoAction = (currentTodo: Todo) => {
  return { type: 'update_edit_todo', todo: currentTodo } as UpdateEditTodoAction
}

export const handleDeleteTodoAction = (id: string) => {
  return { type: 'delete_todo', id } as DeleteTodoAction
}

export const handleGetDataAction = (todos: Todo[]) => {
  return { type: 'get_data', todos } as GetDataTodoAction
}
