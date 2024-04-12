import styles from '@/Components/TaskInput/taskInput.module.scss'
const TaskInput = () => {
  return (
    <div className='mb-2'>
      <h1 className={styles.title}>To do list</h1>
      <form className={styles.form}>
        <input type='text' placeholder='caption goes here' />
        <button type='submit'>➕</button>
      </form>
    </div>
  )
}

export default TaskInput