import TaskInput from '@/Components/TaskInput'
import TaskList from '@/Components/TaskList'
import styles from '@/Components/TodoList/todoList.module.scss'
const TodoList = () => {
  return (
    <div className={styles.todoList}>
      <div className={styles.container}>
        <TaskInput />
        <TaskList />
        <TaskList doneTaskList={true} />
      </div>
    </div>
  )
}

export default TodoList
