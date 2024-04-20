import { Todo } from '@/@types/todo.type'
import TaskInput from '@/Components/TaskInput'
import TaskList from '@/Components/TaskList'
import styles from '@/Components/TodoList/todoList.module.scss'
import { useState } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)
  const doneTodos = todos.filter((todo) => todo.done)
  const notdoneTodos = todos.filter((todo) => !todo.done)
  const addTodo = (name: string) => {
    //ta quản lý todo ở todolist nên hàm addTodo cần được viết ở đây và truyền xuống dưới component input
    const todo: Todo = {
      //name được lấy ở component input
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
  }

  const startEditTodo = (id: string) => {
    //do list todo ở đây nên ta phải làm hàm startEditTodo trên này và truyền xuống taskList component
    //tìm todo bằng id
    const findTodo = todos.find((todo) => todo.id == id)
    //set currentTodo
    if (findTodo) {
      setCurrentTodo(findTodo)
    }
  }

  const editTodo = (name: string) => {
    //khi edit 1 cái todo thì ta phải set lại list todo
    //nhưng tag input nên ở component input nên ta sẽ dùng viết hàm trên hàm và truyền xuống
    setCurrentTodo((prevTodo) => {
      if (prevTodo) return { ...prevTodo, name }
      return null
    })
  }

  const handleDoneTodo = (id: string, done: boolean) => {
    //viết hàm xử lý checked ở đây để cho component con tái sử dụng
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id == id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }

  const finishEditTodo = () => {
    //hàm này để set lại list todo khi edit xong nhưng nút submit lại ở dưới component taskInput nên viết hàm này truyền xuống để
    //để xài
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === (currentTodo as Todo).id) {
          return currentTodo as Todo
        }
        return todo
      })
    })
    setCurrentTodo(null)
  }

  const deleteTodo = (id: string) => {
    if (currentTodo) {
      setCurrentTodo(null)
    }
    setTodos((prevTodos) => {
      const findIndexTodo = prevTodos.findIndex((todo) => todo.id == id)
      if (findIndexTodo > -1) {
        const result = [...prevTodos]
        result.splice(findIndexTodo, 1)
        return result
      }
      return prevTodos
    })
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.container}>
        <TaskInput addTodo={addTodo} currentTodo={currentTodo} editTodo={editTodo} finishEditTodo={finishEditTodo} />
        <TaskList
          todos={notdoneTodos}
          handleDoneTodo={handleDoneTodo}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
        <TaskList
          doneTaskList={true}
          todos={doneTodos}
          handleDoneTodo={handleDoneTodo}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
}

export default TodoList
