import { Todo } from '@/@types/todo.type'
import TaskInput from '@/Components/TaskInput'
import TaskList from '@/Components/TaskList'
import styles from '@/Components/TodoList/todoList.module.scss'
import { useState } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const doneTodos = todos.filter((todo) => todo.done)
  const notdoneTodos = todos.filter((todo) => !todo.done)
  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
  }

  const handleDoneTodo = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id == id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }

  console.log(todos)
  return (
    <div className={styles.todoList}>
      <div className={styles.container}>
        <TaskInput addTodo={addTodo} />
        <TaskList todos={notdoneTodos} handleDoneTodo={handleDoneTodo} />
        <TaskList doneTaskList={true} todos={doneTodos} handleDoneTodo={handleDoneTodo} />
      </div>
    </div>
  )
}

export default TodoList
