import styles from '@/Components/TaskList/taskList.module.scss'

interface TaskListProps {
  doneTaskList?: boolean
}

const TaskList = (props: TaskListProps) => {
  const { doneTaskList } = props
  return (
    <div className='mb-2'>
      <h2 className={styles.title}>{doneTaskList ? 'Hoàn thành' : 'Chưa Hoàn thành'}</h2>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <input type='checkbox' className={styles.taskCheckbox} />
          <span className={styles.taskName}>Học bài</span>
          <div className={styles.taskActions}>
            <button className={styles.taskBtn}>🖋</button>
            <button className={styles.taskBtn}>🗑</button>
          </div>
        </div>
      </div>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <input type='checkbox' className={styles.taskCheckbox} />
          <span className={`${styles.taskName} ${styles.taskNameDone}`}>Học bài</span>
          <div className={styles.taskActions}>
            <button className={styles.taskBtn}>🖋</button>
            <button className={styles.taskBtn}>🗑</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskList
